var util = require('util');
var shortener = require('./lib/shortener');

var s = new shortener.Shortener();

// goo.gl
(function () {
  var url = 'http://www.google.com';
  var key = 'KEY';
  s.google(url, key, function(result) {
    console.log('\nGoogle:');
    console.log('Long url:', result.longUrl);
    console.log('Shortened url:', result.shortUrl);
  });
})();

// bit.ly
(function() {
  var url = 'http://bit.ly';
  var key = 'KEY';
  var format = 'json';
  s.bitly(url, key, format, function(result) {
    console.log('\nBitly:');
    console.log('Long url:', result.longUrl);
    console.log('Short url:', result.shortUrl);
  });
})();