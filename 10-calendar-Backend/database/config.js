const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,  // Corregido
    });

    console.log("DB se inicio correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar la DB");
  }
};

module.exports = { dbConnection };
