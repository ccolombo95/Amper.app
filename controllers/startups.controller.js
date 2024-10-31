import modelos from "../models/startup.models.js";

// const listarProductoPublico = async (req, res) => {

//     try {

//         const productos = await modelos.obtenerTodos()
//         //res.json(productos)
//         //console.log(req.user?.email)
//         //console.log(req.user?.name)

//         const dataVista = {
//             productos: productos
//         }

//         res.render('inicio', dataVista)

//     } catch (error) {
//         console.log('[getAll]', error)
//         res.status(500).json(
//             {
//                 mensaje: 'No se pudo obtener los productos'
//             }
//         )
//     }
// }

// const showCreateForm = (req, res) => {
//     res.render('productos/create')
// }
// const showEditForm = async (req, res) => {

//     const id = req.params.id

//     try {

//         const unProducto = await modelos.obtenerUnProductoPorId(id)

//         const dataVista = {
//             producto: unProducto
//         }

//         res.render('productos/edit', dataVista)

//     } catch (error) {
//         console.log('[showEditForm]', error)
//     }

// }

const getAll = async (req, res) => {
  try {
    const startups = await modelos.obtenerTodos();

    const dataVista = {
      startups: startups,
    };

    res.render("inicio-logueado", dataVista);
  } catch (error) {
    console.log("[getAll]", error);
    res.status(500).json({
      mensaje: "No se pudo obtener los emprendimientos",
    });
  }
};
// const getOne = async (req, res) => {

//     const id = req.params.id

//     try {
//         const producto = await modelos.obtenerUnProductoPorId(id)

//         const dataVista = {
//             producto
//         }

//         res.render('productos/show', dataVista)

//     } catch (error) {
//         console.log('[getOne]', error)
//     }

// }

// // ! CREATE
// const create = async (req, res) => {

//     try {

//         const producto = req.body

//         //console.log(producto) // <--- controlo que me llegue el producto

//         const productoGuardado = await modelos.guardarProducto(producto)

//         //res.status(201).json(productoGuardado) // El producto con el ObjID
//         // res.status(201).render('producto-creado', dataVista)
//         res.status(201).redirect('/api/v1/productos')

//     } catch (error) {
//         console.log('[create]', error)
//         res.status(500).json(
//             {
//                 mensaje: 'No se pudo crear el producto',
//                 producto
//             }
//         )
//     }

// }

// // ! EDIT
// const edit = (req, res) => {

//     const productoEditado = modelos.actualizarProducto()

//     res.send(productoEditado)
// }

// const remove = async (req, res) => {

//     const id = req.params.id

//     try {
//         const productoBorrado = await modelos.removerProducto(id)
//         //res.json(productoBorrado)
//         //res.render('nombre-vista', productoBorrado)
//         res.redirect('/api/v1/productos')
//     } catch (error) {
//         console.log('[remove]', error)
//     }

// }

export default {
  getAll,
  // getOne,
  // create,
  // edit,
  // remove,
  // showCreateForm,
  // showEditForm,
  // listarProductoPublico
};
