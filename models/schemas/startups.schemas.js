import mongoose from "mongoose";

// ! Crear el esquema de productos (SCHEMA)

// https://mongoosejs.com/docs/timestamps.html
// https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose
// https://mongoosejs.com/docs/schematypes.html

const startupsEsquema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slogan: String,
    description: String,
    owner: String,
    phone: Number,
    mail: String,
    website: String,
    mail: String,
    mail: String,
    mail: String,
    mail: String,
  },
  {
    versionKey: false /* remover el field __v */,
    timestamps: true /* createAt y el updateAt */,
  }
);

export default startupsEsquema;
