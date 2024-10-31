
const isAuthenticated = ( req, res, next) => {


    if ( req.isAuthenticated() ) { // passport me entrega este método en el request
        return next()
    }

    res.redirect('/api/auth/login') // Si no está en logueado que lo haga...

}

export default isAuthenticated