const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to The matsaab API');
});

app.listen(config.port, () => {
  console.log(`Server running in ${config.NODE_ENV} mode on port: ${config.port}`);
  console.log(`MongoDB URI: ${config.MONGODB_URI}`);
});
