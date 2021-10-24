const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/proyecto_ciclo3";

// Use ES6 promise for mongoose
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
  serverSelectionTimeoutMS: 120000, // keep trying for 12 seconds
  socketTimeoutMS: 5000, // close socket after 5 seconds
};

mongoose
  .connect(dbURL, options)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(`Database connection ERROR in URLDB: ${dbURL}`);
  });

// signal connection
mongoose.connection
  .once("open", () => {
    console.log("Database has been made");
  })
  .on("error", function (error) {
    console.log("Database connection error: " + error);
  })
  .on("disconnected", function () {
    console.log("Database connection disconnected");
  });

module.exports = mongoose;