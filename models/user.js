const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  userId: {
    type: Number
  },
  username: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getByEmail = function(userObject, callback){
  User.find(userObject, callback)
}

module.exports.getByUsername = function(userObject, callback) {
  User.find(userObject, callback)
}

module.exports.create = function(userObject, callback) {
  userObject.save(callback)
}
