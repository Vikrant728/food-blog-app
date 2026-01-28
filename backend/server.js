const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectionDb");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"))

// routes
app.use("/api/users", require("./routes/user"));
app.use("/api/recipes", require("./routes/recipe"));

app.post("/test", (req, res) => {
  res.json({ message: "Test route working" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
