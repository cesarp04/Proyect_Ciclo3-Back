const express = require("express");
const { getVentasContorller, createVentasController } = require("../controllers/ventas.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes ventas
router.get("/ventas", getVentasContorller);
router.post("/ventas", createVentasController);
router.put("/ventas", createVentasController);

module.exports = router;
