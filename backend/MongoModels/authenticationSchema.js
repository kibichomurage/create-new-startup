const mongoose = require('mongoose');

const authenticationSchema = new mongoose.Schema({
  id:
  {
    type: String,
    required: true
  },
  authStrategy:
  {
    type: String,
    required: true
  },
  name:
  {
    type: String,
    min: 6,
    max: 255,
  },
  email:
  {
    type: String,
  },
  password:
  {
    type: String,
  },
  company:
  {
    type: String,
  },
  blog:
  {
    type: String,
  },
  location:
  {
    type: String,
  },
  loginHistory:
  {
    type: Array,
    default:[],
  }

});
module.exports = mongoose.model('Authentication', authenticationSchema);
