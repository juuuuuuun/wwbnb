require('dotenv').config();
const mongoose = require('mongoose');

const initialize = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on('open', () => {
      resolve('✅ Mongo DB is connected successfully');
    });
    mongoose.connection.on('error', (err) => {
      reject(err); // reject the promise with the provided error
    });
  });
};

const mongoService = {
  initialize,
};

module.exports = mongoService;
