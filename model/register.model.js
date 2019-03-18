const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirm_password: {
    type: String,
    required: true
  },
  isactive : {
    type: Boolean
  }
});

module.exports = mongoose.model('Register', registerSchema);
