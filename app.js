const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const morgan = require("morgan");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const { errorResponse } = require("./helper/errorResponse");

const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // mileseconds to minutes
  max: 5,
  message: "To many requiests from this IP, Please try again later.",
});

app.use(rateLimiter);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());

// Client error
app.use((err, req, res, next) => {
  next(createError(404, "Route not found!"));
});

// Server error => if some error not working all the erros comne here
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
