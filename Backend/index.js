const app = require("./app");
const dbConnection = require("./utils/db");
require("dotenv").config();

// Connect to MongoDB once at cold start
dbConnection();

// Export as Vercel serverless handler
module.exports = app;
