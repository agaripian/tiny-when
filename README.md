# Behance Tiny-When [![Build Status](https://img.shields.io/travis/behance/tiny-when.svg)](http://travis-ci.org/behance/tiny-when) [![NPM version](https://img.shields.io/npm/v/tiny-when.svg)](https://www.npmjs.com/package/tiny-when)

This Browser / Node.js library that periodically checks _when_ a condition is satisfied.


## Features

  - Pass a condition to check the interval
  - Set the options for interval of checks and the max number of checks
  - Returns a promise that is resolved or rejected based on the options


## Usage

```js
const when = require('tiny-when');

function condition() {
  return window.adobeAnalytics && window.liveFyre;
}

const options = {
  maxChecks: 30,
  intervalInMs: 100
}

when(codition, options)
.then(function() {
  console.log('Adobe Analaytics and LiveFyre loaded and are ready!');
});
```


#### When Arguments:

  - `condition` - a function that checks to see if a condition is met (e.g., `function() { return window._satellite && window.s_adbadobenonacdc }`).
  - `options.intervalInMs` - defaults to `300` - Number of MS before checking the condition
  - `options.maxChecks` - defaults to `30` - Number of Max checks


## License

[Apache-2.0](/LICENSE)
