var util = require('util');
var shortener = require('./shortener');

var url = 'http://www.google.com';
var key = 'KEY';

var s = new shortener.Shortener();
s.google(url, key, function(result) {
  console.log(result);
});