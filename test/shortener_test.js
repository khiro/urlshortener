var shortener = require('../lib/shortener');

exports['urlshorener goo.gle'] = function (test) {
  var url = 'http://www.google.com';
  var key = process.env.GOOGLE;
  var s = new shortener.Shortener();
  s.google(url, key, function(result) {
    test.deepEqual(result
             , { 
               shortUrl: 'http://goo.gl/fbsS'
               , longUrl: 'http://www.google.com/' 
             }
             , "Deep equal for www.goo.gl");
    test.done();
  });
};

exports['urlshorener bit.ly'] = function (test) {
  var url = 'http://bit.ly';
  var key = process.env.BITLY;
  var format = 'json';
  var s = new shortener.Shortener();
  s.bitly(url, key, format, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://bit.ly/wq5Qeg'
               , longUrl: 'http://bit.ly/'
             }
             , "Deep equal for bit.ly");
    test.done();
  });
};

exports['urlshorener readability'] = function (test) {
  var url = 'https://www.readability.com/';
  var s = new shortener.Shortener();
  s.readability(url, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://rdd.me/-6tqmqpqj'
               , longUrl: 'https://www.readability.com/'
             }
             , "Deep equal for bit.ly");
    test.done();
  });
};

exports['urlshorener mtny'] = function (test) {
  var url = 'https://sites.google.com/site/mtnymobi2/';
  var s = new shortener.Shortener();
  s.mtny(url, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://mtny.mobi/69kW'
               , longUrl: 'https://sites.google.com/site/mtnymobi2/'
             }
             , "Deep equal for mtny.mobi");
    test.done();
  });
};

exports['urlshorener adf.ly'] = function (test) {
  var url = 'http://example.com/';
  var key = process.env.ADFLY;
  var uid = process.env.ADFLY_UID;
  var s = new shortener.Shortener();
  s.adfly(url, key, uid, function(result) {
    test.deepEqual(result
             , {
               shortUrl: 'http://adf.ly/1S0QLI'
               , longUrl: 'http://example.com/'
             }
             , "Deep equal for adf.ly");
    test.done();
  });
};