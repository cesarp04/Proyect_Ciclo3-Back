const { getProducts, getProductById, createProduct, updateProduct } = require("../database/service/products.service");

async function getProductsController(req, res) {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function getProductsByIdController(req, res) {
  try {
    const products = await getProductById(req.params.id);
    res.json(products[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function createProductsController(req, res) {
  try {
    let data = {};
    data = req.body;

    const products = await createProduct(data);
    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function updateProductController(req, res) {
  try {
    let data = {};
    data = req.body;

    const products = await updateProduct(data.idProduct, data);
    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

async function deleteProductController(req, res) {
  try {
    let data = {};
    data = req.body;

    const products = await deleteProduct(data.idProduct, data);
    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
}

module.exports = {
  getProductsController,
  createProductsController,
  updateProductController,
  getProductsByIdController,
  deleteProductController,
};
