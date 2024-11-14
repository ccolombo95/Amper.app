import modelos from "../models/startups.models.js";

const listarStartupPublico = async (req, res) => {
  try {
    const startups = await modelos.obtenerTodos();

    const dataVista = {
      startups: startups,
    };

    res.render("inicio", dataVista);
  } catch (error) {
    console.log("[getAll]", error);
    res.status(500).json({
      mensaje: "No se pudo obtener los startups",
    });
  }
};

const showCreateForm = (req, res) => {
  res.render("startups/create");
};
const showEditForm = async (req, res) => {
  const id = req.params.id;

  try {
    const startup = await modelos.obtenerUnStartupPorId(id);

    const dataVista = {
      startup: startup,
    };

    res.render("startups/edit", dataVista);
  } catch (error) {
    console.log("[showEditForm]", error);
  }
};

const getAll = async (req, res) => {
  try {
    const startups = await modelos.obtenerTodos();

    const dataVista = {
      startups: startups,
    };
  } catch (error) {
    console.log("[getAll]", error);
    res.status(500).json({
      mensaje: "No se pudo obtener los startups",
    });
  }
};
const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const startup = await modelos.obtenerUnStartupPorId(id);

    const dataVista = {
      startup,
    };

    res.render("startups/show", dataVista);
  } catch (error) {
    console.log("[getOne]", error);
  }
};

// ! CREATE
const create = async (req, res) => {
  console.log("Request received at /startup");
  try {
    const startup = req.body;

    const startupGuardado = await modelos.guardarStartup(startup);

    res.status(201).json({
      mensaje: "si se puedo yeyy",
      startup,
    });
  } catch (error) {
    console.log("[create]", error);
    res.status(500).json({
      mensaje: "No se pudo crear el startup",
      startup,
    });
  }
};

// ! EDIT
const edit = (req, res) => {
  const startupEditado = modelos.actualizarStartup();

  res.send(startupEditado);
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const startupBorrado = await modelos.removerStartup(id);
    res.redirect("/api/v1/startups");
  } catch (error) {
    console.log("[remove]", error);
  }
};

export default {
  getAll,
  getOne,
  create,
  edit,
  remove,
  showCreateForm,
  showEditForm,
  listarStartupPublico,
};
