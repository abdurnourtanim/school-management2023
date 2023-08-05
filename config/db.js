const mongoose = require("mongoose");
const { mongodbUrl } = require("../secret");

const connectDB = async (options = {}) => {
  try {
    const connect = await mongoose.connect(mongodbUrl, options);
    console.log(`Database '${connect.connection.host}' connected successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
