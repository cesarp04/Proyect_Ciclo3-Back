const mongoose = require("../conection.db");

const ventasSchema = mongoose.Schema(
  {
    CUSID_venta: {
      type: String,
      required: true,
      unique: true,
    },
    documentoCliente: {
      type: String,
      required: true,
    },
    id_cliente: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    fechaInicial: {
      type: Date,
      required: true,
    },
    fechaFinal: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    vendedor: {
      type: String,
      required: true,
    },
    valorVenta: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("ventas", ventasSchema);
