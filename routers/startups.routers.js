import express from "express";
const startupsRouter = express.Router();

import controladores from "../controllers/startups.controller.js";
import isAuthenticated from "../middlewares/usuarios.middleware.js";

// ! ***********************************
// ! Rutas para mostrar los formularios
// ! ***********************************

// productosRouter.get('/api/v1/productos/create', isAuthenticated, controladores.showCreateForm)
// productosRouter.get('/api/v1/productos/edit/:id', isAuthenticated, controladores.showEditForm)

// ! ***********************************
// ! CRUD COMPLETO DE PRODUCTOS
// ! ***********************************

// ! CRUD -> R:READ ALL -> Verbo GET ALL -> Nos entrega todos los productos
productosRouter.get("/api/v1/productos", isAuthenticated, controladores.getAll);
// ! CRUD -> R:READ ONE -> Verbo GET ONE -> Nos entrega un producto por id
// productosRouter.get('/api/v1/productos/:id', isAuthenticated, controladores.getOne)
// ! CRUD -> C:CREATE -> Verbo POST -> Nos va a guardar un recurso (producto)
// productosRouter.post('/api/v1/productos', isAuthenticated, controladores.create)
// ! CRUD -> U:UPDATE -> Verbo PUT -> Nos va a editar un recurso (producto)
// productosRouter.put('/api/v1/productos/:id', isAuthenticated, controladores.edit)
// ! CRUD -> D:DELETE -> Verbo DELETE -> Nos va a eliminar un recurso (producto)
// productosRouter.delete('/api/v1/productos/:id', isAuthenticated, controladores.remove)

export default startupsRouter;
