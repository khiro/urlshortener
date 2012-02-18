## About

url shortener for node.js

## Correspondig Site

* [goo.gl](http://goo.gl)
* [bit.ly](http://bitly.com)

## Sample

```javascript
var shortener = require('shortener');

var s = new shortener.Shortener();
s.google('http://www.google.com', 'key', function(result) {
  console.log(result);
});

s.bitly('http://bit.ly', 'user', 'key', 'json', function(result) {
    console.log(result);
});
```

## License

**urlshortener** licensed under [MIT license](https://github.com/khiro/urlshortener/blob/master/LICENSE). Basically you can do whatever you want to with it.