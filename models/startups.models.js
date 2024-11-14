import mongoose from "mongoose";
import startupsEsquema from "./schemas/startups.schemas.js";

// ! Creo el modelo a partir del Esquema
const StartupsModelo = mongoose.model("startups", startupsEsquema);

const obtenerTodos = async () => {
  try {
    const startups = await StartupsModelo.find().lean();
    return startups;
  } catch (error) {
    throw error;
  }
};

const obtenerUnStartupPorId = async (id) => {
  try {
    const startup = await StartupsModelo.findById(id).lean();
    return startup;
  } catch (error) {
    throw error;
  }
};

const guardarStartup = async (startup) => {
  try {
    const startupGuardado = await StartupsModelo.create(startup);
    return startupGuardado;
  } catch (error) {
    throw error;
  }
};

const actualizarStartup = (id, startupPorEditar) => {
  return "OK UPDATE";
};

const removerStartup = async (id) => {
  try {
    const startupEliminado = await StartupsModelo.findByIdAndDelete(id);
    return startupEliminado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodos,
  obtenerUnStartupPorId,
  guardarStartup,
  actualizarStartup,
  removerStartup,
};
