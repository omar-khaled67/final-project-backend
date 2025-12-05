const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    if (!process.env.DB) {
      throw new Error("MongoDB connection string is missing in ENV variables");
    }

    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
//DB = mongodb+srv://malak:malak@cluster0.xgtpf00.mongodb.net/donor?retryWrites=true&w=majority&appName=Cluster0

    console.log("Database connected successfully → donor.users");
  } catch (err) {
    console.error("DB Connection Error:", err);
    process.exit(1); // important for serverless to fail fast
  }
};

module.exports = dbConnection;
