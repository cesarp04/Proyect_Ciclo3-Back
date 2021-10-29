const { getVentas, createVentas, updateVentas, getVentasById } = require("../database/service/ventas.db.service");

async function getVentasContorller(req, res) {
  try {
    const ventas = await getVentas();
    res.json(ventas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function getVentasByIdController(req, res) {
  try {
    const ventas = await getVentasById(req.params.id);
    res.json(ventas[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function createVentasController(req, res) {
  try {
    let data = {};
    data = req.body;
    data.fechaInicial = new Date().toISOString();
    data.fechaFinal = new Date().toISOString();

    const ventas = await createVentas(data);
    res.status(201).json(ventas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function updateVentasController(req, res) {
  try {
    let data = {};
    data = req.body;

    const ventas = await updateVentas(data.CUSID_venta, data);
    res.status(201).json(ventas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function deleteVentasController(req, res) {
  try {
    let data = {};
    data = req.body;

    const ventas = await deleteVentas(data.CUSID_venta, data);
    res.status(201).json(ventas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

module.exports = {
  getVentasContorller,
  createVentasController,
  updateVentasController,
  getVentasByIdController,
  deleteVentasController,
};
