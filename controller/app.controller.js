const express = require('express');
const registerModel = require('../model/register.model');
const app = express();
// console.log("Register");
const register = function(req , res) {

  registerModel.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      return res.json({ success: false, info: "Something went Wrong", result: err });
  }
    if (user) {
      console.log('user', user);
      return res
      .status(400)
      .send({info: 'User aleready exists'});
    } else {
      let myobj = {
        email: req.body.email,
        password: req.body.password,
        confirm_password : req.body.confirm_password,
        isactive : false
      }
      registerModel.create(myobj , function(err,res) {
        if(err) throw err;
        console.log("Register sucessfull");
      })
      return res
      .status(200)
      .send({
      "sucess" : "register sucessfully"
    });
    }
  });
  
  
  }
    
   

module.exports = {
    register : register
}