const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Counter = require('../models/counter');

// create counter
router.post("/create", (req, res, next) => {
  let newCounter = new Counter({
    name: req.body.name,
    count: req.body.count
  })

  Counter.create(newCounter, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: "Counter created"})
    } else {
      res.json({success: false, message: "Counter initialisation failed"})
    }
  })
})

module.exports = router;
