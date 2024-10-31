import passport from 'passport'
import models from '../models/usuarios.models.js'

const showAuthFormRegister = (req, res) => {
    res.render('usuarios/register')
}

// La info que del formulario
const register = async (req, res) => {
    
    const usuario = req.body
    //console.log(usuario)

    const { name, email, password, confirm_password } = usuario
    const errores = []

    try {

        if ( password !== confirm_password ) {
            errores.push( { mensaje: 'La contraseña no coincide' } )
        }

        if ( password.length < 5 ) {
            errores.push( { mensaje: 'La contraseña debe tener al menos 5 caracteres'} )
        }

        const usuarioEncontrado = await models.obtenerUsuarioPorEmail( email )

        if ( usuarioEncontrado ) {
            errores.push( { mensaje: 'El usuario ya existe en nuestros registros'} )
        }

        if ( errores.length > 0 ) {
            return res.status(400).json(errores) // status -> 400 ->  bad requets
        }
        
        // Creo el usuario
        const usuarioCreado = await models.crearUsuario(usuario)
        console.log(usuarioCreado)

        const objRespuesta = {
            name: usuarioCreado.name,
            email: usuarioCreado.email,
            id: usuarioCreado._id
        }

        res.json(objRespuesta)
    } catch (error) {
        console.log('[register]', error)
        res.status(500).json({mensaje: 'No se pudo registrar el usuario'})
    }
}
const showAuthFormLogin = (req, res) => {
    res.render('usuarios/login')
}

const login = passport.authenticate('local', {
    successRedirect: '/api/v1/productos',
    failureRedirect: '/api/auth/login'
})

const logout = (req, res) => {
    res.send('logout')
}

export default {
    showAuthFormRegister,
    register,
    showAuthFormLogin,
    login,
    logout
}