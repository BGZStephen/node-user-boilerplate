const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// User Schema
const CounterSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    index: true
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

module.exports.deleteAll = function(counterObject, callback){
  Counter.find({}, callback).remove().exec()
}

module.exports.deleteOne = function(counterObject, callback){
  Counter.findOne({name: counterObject.name}, callback).remove().exec()
}

module.exports.increment = function(counterObject, callback){
  Counter.update({name: counterObject.name}, {count: counterObject.count}, callback)
}
