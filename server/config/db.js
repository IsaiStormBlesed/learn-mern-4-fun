const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conexion = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Mongodb connected: ${conexion.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
