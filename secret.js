const dotenv = require("dotenv");

dotenv.config();

const serverPort = process.env.PORT;
const mongodbUrl = process.env.MONGODB_URL;

module.exports = { serverPort, mongodbUrl };
