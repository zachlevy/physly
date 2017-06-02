var express = require('express');
var router = express.Router();
var Link = require("../models").Link;

/* GET links listing. */
router.get('/', function(req, res, next) {
  Link.findAll().then(links => {
    console.log(links)
    res.send(JSON.stringify(links));
  })
});

module.exports = router;
