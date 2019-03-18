const express = require('express');
const registerModel = require('../model/register.model');
const app = express();

console.log('getting data');
const data = function (req, res) {
    registerModel.find({}, function (err, docs) {
        if (err) res.json(err);
        else res.render('data', { users: docs });
    });
}

module.exports = {
    data: data
}