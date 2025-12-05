const express = require("express");
const cors = require("cors");
const app = express();

// Routes
const authRoute = require("./routes/auth");
const prospectRoutes = require("./routes/prospect");
const donorRoutes = require("./routes/donor");

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_HOST, 
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/prospect", prospectRoutes);
app.use("/api/donor", donorRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Blood Bridge Backend is running perfectly!");
});

// Export app only
module.exports = app;
