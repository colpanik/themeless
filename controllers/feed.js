var config = require('../config');
var tumblr = require('tumblr');

module.exports = function(req, res) {
  var options = {};
  if(req.query.tag) { options.tag = req.query.tag }

  var b = new tumblr.Blog(req.query.url , config.tumblr);

  b.posts(options, function (err, data) {
    console.log(data);

    if(err) { console.log(err) }
    res.render('feed.html', {
      data: data
    });
  });
}