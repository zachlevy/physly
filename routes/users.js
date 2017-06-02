var express = require('express');
var router = express.Router();
var User = require("../models").User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    console.log(users)
    res.send(JSON.stringify(users));
  })
  // res.send('respond with a resource');
});

module.exports = router;
