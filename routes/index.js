var express = require('express');
var router = express.Router();

var models = require('../models');
var Link = models.Link;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Phys.ly' });
});

router.get('/:slug', function(req, res) {
  console.log(req.body)
  Link.findOne({where: {slug: req.params.slug}}).then(function (link) {
    console.log(link);
    res.send(
      `<html>
        <head>
        <style>
          body {
            margin: 0;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: 0;
            margin: 0;
          }
        </style>
        </head>
        <body>
        <iframe src="${link.get('url')}"></iframe>
        </body>
      </html>`
    )
  });
});

module.exports = router;
