import mongoose from "mongoose";

// ! Crear el esquema de startups (SCHEMA)

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
    facebook: String,
    instagram: String,
    banner: String,
    photo1: String,
    photo2: String,
    text1: String,
    text2: String,
    text3: String,
    donations: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default startupsEsquema;
