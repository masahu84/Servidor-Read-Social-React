const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://mshumanes:IqA2dSGr9Lahxg2B@basedatosredsocial.svx3ljk.mongodb.net/?retryWrites=true&w=majority"
    );
    //await mongoose.connect("mongodb://127.0.0.1:27017/mi_redsocial");

    console.log("Conectado correctamente a bd: mi_redsocial");
  } catch (error) {
    console.log(error);
    throw new Error("No se ha podido conectar a la base de datos !!");
  }
};

module.exports = connection;

// user y password mongoDB Atlas (mshumanes - IqA2dSGr9Lahxg2B)
