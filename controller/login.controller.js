const express = require('express');
const registerModel = require('../model/register.model');
const app = express();

// console.log("Register");
const login = function (req, res) {
  console.log(req.body);
  registerModel.findOne({
    email: req.body.email
  }, function (err, user) {
    console.log('User found ');
    // In case the user not found   
    if (err) {
      console.log('THIS IS ERROR RESPONSE')
      res.json(err)
    }
    if (user && user.password === req.body.pwd && user.isactive == true) {
      console.log('User and password is correct');;
      let query = { _id: { $ne: user._id } }
      registerModel.find(query, function (err, user) {
        console.log('user', user);

        res.render('data', { users: user });
      })

      //  app.get('/api/user')
    } else {
      console.log("Credentials wrong");
      res.json({
        data: "invalid"
      });
    }
  });
}
module.exports = {
  login: login
}