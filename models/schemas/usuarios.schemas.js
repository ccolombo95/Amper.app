import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuariosEsquema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// Métodos de los esquemas ( Métodos de mongoose )
//                                                   123456
usuariosEsquema.methods.encriptarPassword = async ( password ) => {

    try {
        const salt = await bcrypt.genSalt(10) // semilla
        return await bcrypt.hash(password, salt) // me retorna el password encriptado (hasheado)
    } catch (error) {
        throw error     
    }

}
//                                                        123456
usuariosEsquema.methods.comprobarPassword = async function(password) {
    // Como el hasheo del password es irreversible. Lo que hace para comparar, es hashear el password que llegó del formulario de logueo para luego compararlo con el password almacenado en la DB
    //                           input          DB
    return await bcrypt.compare(password, this.password)
    //                           123456 ,   $2b$10$ZPs6c5lvlPlIqlMZdgUX.uxPz6v8nnc11/KtVXvR4eJz8fVABnefm
}

export default usuariosEsquema