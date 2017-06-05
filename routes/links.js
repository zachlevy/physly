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
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    favicon: req.body.favicon
  }
  Link.create(linkParams).then(function(newLink) {
    res.send(JSON.stringify(newLink))
  }).catch(function(err) {
    console.log("catch link creation");
    console.log(err)
    res.status(422).send()
  })
})

module.exports = router;
