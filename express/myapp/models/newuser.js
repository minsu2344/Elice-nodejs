const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const userData = mongoose.model('newUsers', userSchema);
module.exports = userData;