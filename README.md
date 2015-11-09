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

s.bitly('http://bit.ly', 'key', 'json', function(result) {
    console.log(result);
});
```

## Development

### Setup
```
git clone https://github.com/khiro/urlshortener.git
cd urlshortener
npm install
```
### Testing

Insert keys in `test/shortener_test.js` and run:
```
npm test
```

## License

**urlshortener** licensed under [MIT license](https://github.com/khiro/urlshortener/blob/master/LICENSE). Basically you can do whatever you want to with it.