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

// delete all counters
router.post("/deleteAll", (req, res, next) => {
  let counterObject = {}

  Counter.deleteAll(counterObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: "All Counters deleted"})
    } else {
      res.json({success: false, message: "Counter deletion failed"})
    }
  })
})

// delete one counter
router.post("/deleteOne", (req, res, next) => {
  let counterObject = {
    name: req.body.name
  }

  Counter.deleteOne(counterObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: "Counter deleted"})
    } else {
      res.json({success: false, message: callback})
    }
  })
})

// get all counters
router.post("/getAll", (req, res, next) => {
  let counterObject = {}

  Counter.getAll(counterObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Failed to get counters"})
    }
  })
})

// get one counter
router.post("/getOne", (req, res, next) => {
  let counterObject = {
    name: req.body.name
  }

  Counter.getOne(counterObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Failed to get counter"})
    }
  })
})

// FUNCTION FOR TESTING ONLY, INCREMENTING WILL OCCUR FROM USER ROUTE CALLS IN PROD
router.post("/increment", (req, res, next) => {
  let counterObject = {
    name: req.body.name,
    count: req.body.count
  }

  Counter.increment(counterObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: "Counter incremented"})
    } else {
      res.json({success: false, message: "Counter increment failed "})
    }
  })
})

module.exports = router;
