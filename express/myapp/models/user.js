const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const user = new Schema({
  userid: {
    type: String,
    required: true,
    unique: true, // collection 안에서 유일(id 중복 여부 등)
  },
  job: {
    type: String,
    required: true,
  },
})

const userData = mongoose.model('users', user);
module.exports = userData;