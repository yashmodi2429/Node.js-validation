const express = require('express');
const registerModel = require('../model/register.model');
const app = express();


const updateuserdata = function(req,res) {
    console.log('update user module');
    var seActive = req.body.isactive;
    // var newActivity = !seActive;
  //  console.log(newActivity);
    registerModel.findOne({
        _id: req.body._id
      }, function (err, user) {
        console.log('User found ');
        var myquery = req.body._id;
        registerModel.updateOne({_id:myquery},  { $set: { isactive : seActive}},
          function( err, result ) {
              if ( err ) throw err;
          });
        // In case the user not found   
        if (err) {
          console.log('THIS IS ERROR RESPONSE')
          res.json(err)
        } else {
            res.json({
                info : "updated"
            });
        }
});
}


module.exports = {
    updateuserdata :updateuserdata
};