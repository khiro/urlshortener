var request = require('request');

exports.Shortener = Shortener;

function Shortener() {}

Shortener.prototype.google = function(longurl, key, callback) {
  var options = {
    url: 'https://www.googleapis.com/urlshortener/v1/url?key=' + key,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    json: {
      'longUrl': longurl
    }
  };
  
  sendRequest(options, function(body) {
    callback({
      'longUrl': body.longUrl,
      'shortUrl': body.id
    });
  });
};

Shortener.prototype.bitly = function(longurl, key, format, callback) {
  var options = {
    url: 'https://api-ssl.bitly.com/v3/shorten?access_token=' + key + 
    '&longUrl=' + longurl + '&format=' + format || 'json',
    method: 'GET'
  };
  
  sendRequest(options, function(body) {
    callback({
      'longUrl': body.data.long_url,
      'shortUrl': body.data.url
    });
  });
};

Shortener.prototype.readability = function(longurl, callback) {
  var options = {
    url: 'http://www.readability.com/api/shortener/v1/urls',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      url: longurl
    },
    method: 'POST'
  };
  
  sendRequest(options, function(body) {
    callback({
      'longUrl': longurl,
      'shortUrl': body.meta.rdd_url
    });
  });
};

Shortener.prototype.mtny = function(longurl, callback) {
  var options = {
    url: 'http://mtny.mobi/api/?url=' + longurl + '&ismobile=false&type=json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'GET'
  };
  
  sendRequest(options, function(body) {
      callback({
        'longUrl': longurl,
        'shortUrl': body.url
      });
  });
};

Shortener.prototype.adfly = function(longurl, key, uid, callback, params) {
  var params = params || {};
  var options = {
    url: 'http://api.adf.ly/api.php?key=' + key + 
    '&uid=' + uid + '&advert_type=' + (params.advType || 'int') + 
    '&domain=' + (params.domain || 'adf.ly') + 
    '&url=' + longurl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'GET'
  };
  
  sendRequest(options, function(body) {
      callback({
        'longUrl': longurl,
        'shortUrl': body
      });
  });
};

function sendRequest(options, callback) {
  request(options, function(err, res, body) {
    if(err) throw err;
    if(typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch(err) { }
    }
    
    callback(body);
  });
}
