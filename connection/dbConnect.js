const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/demo";
// const logger = config.logger;

const connect = function () {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true
  });
}

module.exports = {
  connect: connect
}
