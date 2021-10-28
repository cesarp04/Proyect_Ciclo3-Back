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

async function createVentas(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const ventas = await ventasModel.create(data);
      await ventas.save((err, resultDB) => {
        if (err) {
          reject(err);
        }
        resolve(resultDB);
      });
      resolve(ventas);
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
      await ventasModel.updateOne(filter, document);
      document.CUSID_venta = id;
      resolve({
        message: "Venta actualizada",
        document,
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
};
