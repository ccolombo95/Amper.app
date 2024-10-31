import mongoose from "mongoose";
import productosEsquema from "./schemas/startups.schemas.js";

// ! Creo el modelo a partir del Esquema
const ProductosModelo = mongoose.model("productos", productosEsquema);

const obtenerTodos = async () => {
  try {
    // .lean() -> Convierte el objeto de mongoose en un objeto de js. mongoose: { productos, metodosMongoose, mentodosMongoose}
    // https://es.stackoverflow.com/questions/333510/error-con-el-motor-del-plantilla-handlebars
    const productos = await ProductosModelo.find().lean();
    return productos;
  } catch (error) {
    throw error; // Lanzo el error hacía más arriba
  }
};

const obtenerUnProductoPorId = async (id) => {
  try {
    // El findById -> Devuelve un objeto de mongoose -> lean() -> obj de JS
    const unProducto = await ProductosModelo.findById(id).lean();
    return unProducto;
  } catch (error) {
    throw error;
  }
};

const guardarProducto = async (producto) => {
  try {
    // ! 1. Guardado en la DB
    const productoGuardado = await ProductosModelo.create(producto);
    // ! 2. Retornamos el producto guardado
    return productoGuardado; // El producto con el ObjID
  } catch (error) {
    throw error;
  }
};

const actualizarProducto = (id, productoPorEditar) => {
  return "OK UPDATE";
};

const removerProducto = async (id) => {
  try {
    const productoEliminado = await ProductosModelo.findByIdAndDelete(id);
    return productoEliminado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodos,
  obtenerUnProductoPorId,
  guardarProducto,
  actualizarProducto,
  removerProducto,
};
