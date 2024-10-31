import express from 'express'
import { engine } from 'express-handlebars'
import session from 'express-session'
import 'dotenv/config'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import methodOverride from 'method-override'
import jwt from 'jsonwebtoken'

import productosRouter from './routers/productos.routers.js'
import handleConnection from './utils/handle-connection.js'
import routerUsuarios from './routers/usuarios.router.js'
import * as passportStrategy from './utils/handle-passport.js' // incorporo la estrategia local al proyecto
import * as passportStrategyJwt from './utils/handle-jwt.js' // incorporo la estrategia jwt al proyecto
import controladores from './controllers/productos.controller.js'
import cookieParser from 'cookie-parser'

// ! Constantes/Variables
const app = express()
const PORT = process.env.PORT || 2222
const NODE_ENV = process.env.NODE_ENV
const MONGO_LOCAL = process.env.MONGO_LOCAL
const MONGO_REMOTO = process.env.MONGO_REMOTO
const SECRET_SESSION = process.env.SECRET

// ! Configuración Handlebars
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
// * Acoplamos handlebars a express
app.set('view engine', 'hbs')
app.set('views', './views')


// ! Middleware
app.use(express.static('./public'))
app.use(express.json()) // <<<<---- Poder interpretar los json que le voy a enviar por el BODY
app.use(express.urlencoded({extended: true}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(cookieParser()) // Incorporo cookie parser para leer lo jwt recibidos por las cookies

// ! Configuración Express Session
app.use(session(
    {
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: MONGO_LOCAL })
    }
))

// ! Configuración Passport
app.use(passport.initialize())
app.use(passport.session())

// ! Rutas
app.use('/', productosRouter) // ! Router para productos
app.use('/', routerUsuarios) // ! Router para usuarios


app.get('/', controladores.listarProductoPublico)

// ! RUTAS para el Auth con JSON Web Token
app.get('/jwt/login', passport.authenticate('local'), (req, res) => { // http://localhost:8080/jwt/login
    // Estamos firmando el token
    const payload = { id: req.user._id }
    const secret_jwt = process.env.JWT
    const tiempo_duracion_token = { expiresIn: '1h' }
    const token = jwt.sign(payload, secret_jwt, tiempo_duracion_token)
    res.json( { token } )
})

// ! Si no tengo el token no puedo acceder porque la ruta es privada
app.get('/jwt/profile', passport.authenticate('jwt'), (req, res) => { // http://localhost:8080/jwt/profile
    const usuario = req.user
    const usuarioPersonalidado = {
        nombre: usuario.name,
        email: usuario.email 
    }
    res.json({ usuario: usuarioPersonalidado } )
})



// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error(`No se pudo levantar el servidor -> ${err}`)
    console.log(`Aplicación arrancó -> http://localhost:${PORT}`)

    console.log(NODE_ENV)
    if ( NODE_ENV === 'desarrollo' ) {
        handleConnection(MONGO_LOCAL)
    } else {
        handleConnection(MONGO_REMOTO)
    }

})