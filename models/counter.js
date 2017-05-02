const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const CounterSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  count: {
    type: Number,
    unique: true
  }
});

const Counter = module.exports = mongoose.model('Counter', CounterSchema)

module.exports.create = function(counterObject, callback){
  counterObject.save(callback)
}
