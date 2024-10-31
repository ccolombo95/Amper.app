import passport from "passport";
import usuariosModels from "../models/usuarios.models.js";
import JwtStrategy from "passport-jwt/lib/strategy.js";
import { ExtractJwt } from "passport-jwt";

const opts = {}
//opts.jwtFromRequest = ExtractJwt.fromBodyField('token') // cuerpo de la petición
//opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken() // Auth Bearer

const extraerCookie = function(req) {

    console.log(req.cookies)
    let token = null
    if (req && req.cookies) {
        token = req.cookies['jwt']
    }
    return token

}

//opts.jwtFromRequest = extraerCookie
opts.jwtFromRequest = ExtractJwt.fromHeader('x-token') // a través de una cabecera personalizada
opts.secretOrKey = process.env.JWT

const comprobacionUsuario = async (jwt_payload, done) => {
    console.log(jwt_payload)

    try {

        const usuario = await usuariosModels.obtenerUsuarioPorId(jwt_payload.id)

        if (usuario) {
            return done(null, usuario, {mensaje: 'Se encontró el usuario'})
        } else {
            return done(null, false, { mensaje: 'No se encontró el usuario'})
        }

        
    } catch (error) {
       console.log('[comprobacionUsuario]', error)
       return done(error, false)
    }


}

const estrategiaJwt = new JwtStrategy(opts, comprobacionUsuario)

export default passport.use(estrategiaJwt)