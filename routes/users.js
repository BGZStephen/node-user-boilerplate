const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Counter = require('../models/counter');

router.post("/create", (req, res, next) => {

  // newUser object to submit
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  // define counter to be called for assigning unique userID's
  let counter = {
    name: "userId"
  }

  Counter.getOne(counter, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      newUser.userId = callback.count // assign unique id to new user
      User.create(newUser, (err, callback) => {
        if(err) throw(err)
        if(callback) {
          let newCounterValue = newUser.userId + 1
          Counter.increment({name: "userId", count: newCounterValue}, (err, callback) => {
            if(err) throw(err)
            if(callback) {
              res.json({success: true, message: "User creation successful"})
            }
          })
        } else {
          res.json({success: true, message: "User creation failed"})
        }
      })
    } else {
      res.json({success: false, message: "Failed to get counter"})
    }
  })
})

// get by email

router.post("/getByEmail", (req, res, next) => {
  let userObject = {
    email: req.body.email
  }

  User.getByEmail(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Email not found"})
    }
  })
})

// get by username

router.post("/getByUsername", (req, res, next) => {
  let userObject = {
    username: req.body.username
  }

  User.getByUsername(userObject, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      res.json({success: true, message: callback})
    } else {
      res.json({success: false, message: "Username not found"})
    }
  })
})

// register
router.post("/register", (req, res, next) => {

  // newUser object to submit
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  // define counter to be called for assigning unique userID's
  let counter = {
    name: "userId"
  }

  // assign a unique ID provided by the counter
  Counter.getOne(counter, (err, callback) => {
    if(err) throw(err)
    if(callback) {
      newUser.userId = callback.userId // assign unique id to new user
      // check if username already exists
      User.findByUsername({username: newUser.username}, (err, callback) => {
        if(err) throw(err)
        if(callback.results != null) {
          res.json({success: false, message: "Username already exists"})
        } else {
          // check if email already exists
          User.findByEmail({email: newUser.email}, (err, callback) => {
            if(err) throw(err)
            if(callback.results !=null) {
              res.json({success: false, message: "Username already exists"})
            } else {
              // send newUser object to registerUser function (check Models), password will be hashed, user stored on MongoDB and callback returned if successful
              User.create(newUser, (err, callback) => {
                if(err) throw(err)
                if(callback) {
                  // set the new counter value for incrementing
                  let newCounterValue = newUser.userId + 1
                  Counter.increment({name: "userId", count: newCounterValue}, (err, callback) => {
                    if(err) throw(err)
                    if(callback) {
                      res.json({success: true, message: "Registration successful"})
                    }
                  })
                } else {
                  res.json({success: true, message: "Registration failed"})
                }
              })
            }
          })
        }
      })
    } else {
      res.json({success: false, message: "Unable to retrieve counter"})
    }
  })
})

module.exports = router;
