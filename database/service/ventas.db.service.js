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

module.exports = {
  createVentas,
  getVentas,
};
