var shortener = require('../shortener');

exports['urlshorener www.google.com'] = function (test) {
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
					   , "Deep equal for www.google.com");
	});
  test.done();
};
