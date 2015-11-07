var shortener = require('../lib/shortener');

exports['urlshorener goo.gle'] = function (test) {
	var url = 'http://www.google.com';
	var key = 'KEY';
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
  	var key = 'KEY';
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
  	s.bitly(url, function(result) {
  		test.deepEqual(result
					   , {
						   shortUrl: 'http://rdd.me/-6tqmqpqj'
						   , longUrl: 'https://www.readability.com/'
					   }
					   , "Deep equal for bit.ly");
    test.done();
	});
};