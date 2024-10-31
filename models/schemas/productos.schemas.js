import mongoose from "mongoose";

// ! Crear el esquema de productos (SCHEMA)

// https://mongoosejs.com/docs/timestamps.html
// https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose
// https://mongoosejs.com/docs/schematypes.html

const productosEsquema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        categoria: String,
        disponible: Boolean,
        stock: Number,
        precio: Number
    },
    {
        versionKey: false, /* remover el field __v */
        timestamps: true /* createAt y el updateAt */
    }
)

export default productosEsquema
