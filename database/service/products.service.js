const productsModel = require("../models/product.model");

async function getProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const products = await productsModel.find({});
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
}

async function getProductById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await productsModel.find({ CUSID_venta: id });
      if (product.length === 0) {
        reject("No se encontro el registro o CUSID_venta");
      }
      resolve(product);
    } catch (error) {
      reject(error);
    }
  });
}

async function createProduct(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await productsModel.create(data);
      await product.save();
      resolve({
        message: "Product creado",
        product,
      });
    } catch (error) {
      if (error.keyPattern.idProduct) {
        reject("idProduct esta repetido");
      } else {
        reject(error);
      }
    }
  });
}

async function updateProduct(id, data) {
  return new Promise(async (resolve, reject) => {
    try {
      let filter = { idProduct: id };
      const result = await productsModel.findOneAndUpdate(filter, data);
      if (!result) {
        reject("No se encontro el registro o idProduct");
      }
      resolve({
        message: "Producto actualizado actualizada",
        "datos actualizados": data,
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function deleteProduct(id, data) {
  return new Promise(async (resolve, reject) => {
    try {
      let filter = { idProduct: id };
      const result = await productsModel.findOneAndDelete(filter, data);
      if (!result) {
        reject("No se encontro el registro o idProduct");
      }
      resolve({
        message: "Producto actualizado actualizada",
        "datos actualizados": data,
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
