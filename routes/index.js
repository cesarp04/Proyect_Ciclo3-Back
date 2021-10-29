const express = require("express");
const {
  getVentasContorller,
  createVentasController,
  updateVentasController,
  getVentasByIdController,
  deleteVentasController,
} = require("../controllers/ventas.controller");
const {
  getProductsController,
  createProductsController,
  updateProductController,
  getProductsByIdController,
  deleteProductController,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes ventas
router.get("/ventas", getVentasContorller);
router.get("/ventas/:id", getVentasByIdController);
router.post("/ventas", createVentasController);
router.put("/ventas", updateVentasController);
router.delete("/ventas", deleteVentasController);

// routes productos
router.get("/products", getProductsController);
router.get("/products/:id", getProductsByIdController);
router.post("/products", createProductsController);
router.put("/products", updateProductController);
router.delete("/products", deleteProductController);

module.exports = router;
