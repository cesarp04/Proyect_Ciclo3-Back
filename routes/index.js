const express = require("express");
const {
  getVentasContorller,
  createVentasController,
  updateVentasController,
  getVentasByIdController,
} = require("../controllers/ventas.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes ventas
router.get("/ventas", getVentasContorller);
router.get("/ventas/:id", getVentasByIdController);
router.post("/ventas", createVentasController);
router.put("/ventas", updateVentasController);

module.exports = router;
