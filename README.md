## About

url shortener for node.js

[List of supported/comming services](https://github.com/khiro/urlshortener/issues/7)

## Sample

```javascript
var shortener = require('shortener');

var s = new shortener.Shortener();

s.readability('https://www.readability.com/', function(result) {
  console.log('\nReadability:');
  console.log('Long url:', result.longUrl);
  console.log('Short url:', result.shortUrl);
});

s.mtny('https://sites.google.com/site/mtnymobi2/', function(result) {
  console.log('\nMtny:');
  console.log('Long url:', result.longUrl);
  console.log('Short url:', result.shortUrl);
})
```

## Development

### Setup
```
git clone https://github.com/khiro/urlshortener.git
cd urlshortener
npm install
```
### Testing

Replace `GOOGLE TOKEN` and `BITLY TOKEN` with corresponding tokens:

```
GOOGLE="GOOGLE TOKEN" BITLY="BITLY TOKEN" npm test
```

## License

**urlshortener** licensed under [MIT license](https://github.com/khiro/urlshortener/blob/master/LICENSE). Basically you can do whatever you want to with it.
