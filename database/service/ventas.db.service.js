const ventasModel = require("../models/ventas.model");

async function getVentas() {
  return new Promise(async (resolve, reject) => {
    try {
      const ventas = await ventasModel.find({});
      resolve(ventas);
    } catch (error) {
      reject(error);
    }
  });
}

async function getVentasById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const ventas = await ventasModel.find({ CUSID_venta: id });
      if (ventas.length === 0) {
        reject("No se encontro el registro o CUSID_venta");
      }
      resolve(ventas);
    } catch (error) {
      reject(error);
    }
  });
}

async function createVentas(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const ventas = await ventasModel.create(data);
      await ventas.save();
      resolve({
        message: "Venta creada",
        ventas,
      });
    } catch (error) {
      if (error.keyPattern.CUSID_venta) {
        reject("CUSID_venta esta repetido");
      } else {
        reject(error);
      }
    }
  });
}

async function updateVentas(id, data) {
  return new Promise(async (resolve, reject) => {
    try {
      let filter = { CUSID_venta: id };
      let document = {
        documentoCliente: data.documentoCliente,
        id_cliente: data.id_cliente,
        clientName: data.clientName,
        product: data.product,
        estado: data.estado,
        vendedor: data.vendedor,
        valorVenta: data.valorVenta,
      };
      const result = await ventasModel.findOneAndUpdate(filter, document);
      if (!result) {
        reject("No se encontro el registro o CUSID_venta");
      }
      resolve({
        message: "Venta actualizada",
        result,
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  createVentas,
  getVentas,
  updateVentas,
  getVentasById,
};
