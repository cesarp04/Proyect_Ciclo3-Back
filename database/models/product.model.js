const mongoose = require("../conection.db");

const productSchema = mongoose.Schema(
  {
    idProduct: {
      type: String,
      required: true,
      unique: true,
    },
    nameProduct: {
      type: String,
      required: true,
    },
    colorProduct: {
      type: String,
      required: true,
    },
    valorProduct: {
      type: String,
      required: true,
    },
    cantidadProduct: {
      type: String,
      required: true,
    },
    descripcionProduct: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("productos", productSchema);
