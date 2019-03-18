const express = require('express');
const app = express();
const router = express.Router();
const registerUser = require('../controller/app.controller');
const loginUser = require('../controller/login.controller');
const userdata = require('../controller/user.controller');
const updateuser = require('../controller/update.controller');
const bodyParser = require('body-parser');
console.log("Route");

router.use(bodyParser.urlencoded({
    extended: false
  }));
  
  router.use(bodyParser.json());
  
  router.use(function (error, req, res, next) {
    if (error) {
      res.send('Invalid Json');
    }
  })
  
  // routes
router.post('/update',updateuser.updateuserdata);
router.post('/register',registerUser.register);
router.post('/login',loginUser.login);
// router.get('/user');
module.exports = router;
