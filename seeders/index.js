// seeds
'use strict';

var models = require("../models")
var User = models.User
var Link = models.Link

console.log("clean tables")
Link.destroy({
  where: {}
})
User.destroy({
  where: {}
})

console.log("seed tables")
User.create({email: "a@a.com"}).then(function(newUser) {
  // now you can use newUser acessors to create the login
  newUser.createLink({ slug: "goog", url: "http://google.com" });
  newUser.createLink({ slug: "red", url: "http://redanchormedia.com" });
  newUser.createLink({ slug: "wiki", url: "http://wikipedia.org" });
  return
})
