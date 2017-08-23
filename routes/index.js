var express = require('express');
var router = express.Router();

var models = require('../models');
var Link = models.Link;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Phys.ly' });
  return
});

router.get('/pages/subscribe', function(req, res, next) {
  res.render('subscribe', { title: 'Phys.ly Subscribe', apiUrl: process.env.API_URL });
  return
});

router.get('/:slug', function(req, res) {
  console.log(req.body)
  console.log(req.params.slug)
  Link.findOne({where: {slug: req.params.slug}}).then(function (link) {
    console.log(link);
    res.send(
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">

          <title>${link.get('title')}</title>
          <meta name="description" content="${link.get('description')}">
          <link rel="icon" href="${link.get('favicon')}">
        </head>
        <body>
          <script>
            window.location.replace("${link.get('url')}");
          </script>
        </body>
      </html>`
    )
  });
});

module.exports = router;
