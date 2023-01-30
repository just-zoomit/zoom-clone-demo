const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 30015;
app.use(cors())
app.use(express.json());

const zoomRoutes = require("./routes/zoomRoutes"); // Import the zoomRoutes.js file

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/api/zoom", zoomRoutes); // Add this line

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});