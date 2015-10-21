var util = require('util');
var shortener = require('./lib/shortener');

var s = new shortener.Shortener();

// goo.gl
(function () {
  var url = 'http://www.google.com';
  var key = 'KEY';
  s.google(url, key, function(result) {
    console.log(result);
    console.log(result['longUrl']);
  });
})();

// bit.ly
(function() {
  var url = 'http://bit.ly';
  var key = 'KEY';
  var format = 'json';
  s.bitly(url, key, format, function(result) {
    console.log(result);
    if (result['status_code'] === 200 && result['status_txt'] === 'OK') {
      console.log(result['data']['url']);
    } else {
      console.log('can\'t get short url');
    }
  });
})();