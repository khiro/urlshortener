var shortener = require('../lib/shortener');

exports['urlshorener goo.gle'] = function (test) {
	var url = 'http://www.google.com';
	var key = 'KEY';
	var s = new shortener.Shortener();
	s.google(url, key, function(result) {
		test.deepEqual(result
					   , { 
						   kind: 'urlshortener#url'
						   , id: 'http://goo.gl/fbsS'
						   , longUrl: 'http://www.google.com/' 
					   }
					   , "Deep equal for www.goo.gl");
    test.done();
	});
};

exports['urlshorener bit.ly'] = function (test) {
  var url = 'http://bit.ly';
  var user = 'USER';
  var key = 'KEY';
  var format = 'json';
	var s = new shortener.Shortener();
	s.bitly(url, user, key, format, function(result) {
		test.deepEqual(result
                   , { status_code: 200,
                       status_txt: 'OK',
                       data:
                       { long_url: 'http://bit.ly/',
                         url: 'http://bit.ly/wq5Qeg',
                         hash: 'wq5Qeg',
                         global_hash: '2lkCBm',
                         new_hash: 0 } }
					         , "Deep equal for bit.ly");
    test.done();
	});
};

