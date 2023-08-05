const connectDB = require("./config/db");
const app = require("./app");
const { serverPort } = require("./secret");

const PORT = serverPort || 4002;
app.listen(PORT, async () => {
  console.log(`Server running on PORT:${PORT}, Visit http://localhost:${PORT}`);
  await connectDB();
});
