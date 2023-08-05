const errorResponse = (
  req,
  { statusCode = 500, message = "Internal Server Error!" }
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const successResponse = (req, { statusCode = 200, message = "Success" }) => {
  return res.status(statusCode).json({
    success: true,
    message,
  });
};

module.exports = { errorResponse, successResponse };
