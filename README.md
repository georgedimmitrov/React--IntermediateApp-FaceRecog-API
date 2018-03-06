# API for FaceRecog React App

For API Key add file keys.js in /config/keys.js

```javascript
// keys.js
const CLARIFAI_APIKEY = 'YOUR API KEY';

module.exports = {
  CLARIFAI_APIKEY
};

// image.js
const { CLARIFAI_APIKEY } = require('../config/keys');
```