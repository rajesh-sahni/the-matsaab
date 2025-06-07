require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/the-matsaab",
  NODE_ENV: process.env.NODE_ENV || "development",
};
