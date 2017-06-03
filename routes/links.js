var express = require('express');
var router = express.Router();
var Link = require("../models").Link;
var generator = require("../lib/generator")

/* GET links listing. */
router.get('/', function(req, res, next) {
  Link.findAll().then(links => {
    res.send(JSON.stringify(links));
  })
});

router.post('/', function(req, res) {
  var linkParams = {
    slug: generator.randomString(),
    url: req.body.url
  }
  Link.create(linkParams).then(function(newLink) {
    res.send(JSON.stringify(newLink))
  })
})

module.exports = router;
