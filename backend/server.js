const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectionDb");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

// ❌ DO NOT use express.static in production
if (process.env.NODE_ENV !== "production") {
  app.use(express.static("public"));
}

// routes
app.use("/api/users", require("./routes/user"));
app.use("/api/recipes", require("./routes/recipe"));

// health check
app.get("/", (req, res) => {
  res.json({ message: "FoodRecipe API running 🚀" });
});

// 🟢 LOCAL ONLY
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

// ✅ REQUIRED for Vercel
module.exports = app;
