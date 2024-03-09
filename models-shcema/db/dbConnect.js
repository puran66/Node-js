const mongoose = require('mongoose');

const connectDb = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
  });

  mongoose.connection.on('error', (err) => {
    console.error("MongoDB Connection Error:", err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log("MongoDB Disconnected");
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log("MongoDB Connection Closed");
      process.exit(0);
    });
  });
};

module.exports = connectDb;
