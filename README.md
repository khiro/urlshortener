## About

url shortener for node.js

## Correspondig Site

* [goo.gl](http://goo.gl)

## Sample

```javascript
var shortener = require('shortener');

var url = 'http://www.google.com';
var key = 'KEY';

var s = new shortener.Shortener();
s.google(url, key, function(result) {
  console.log(result);
});
```