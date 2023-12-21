# Name That Color

A Node CommonJS compatible wrapper for the Name That Color library (ntc js) - http://chir.ag/projects/ntc/

## Installation

```
npm install @trihargianto/ntcjs --save
```

## Getting Started

```javascript
const ntc = require("@trihargianto/ntcjs");

const n_match = ntc.name("#6195ED");
n_rgb = n_match[0]; // This is the RGB value of the closest matching color
n_name = n_match[1]; // This is the text string for the name of the match
n_shade_rgb = n_match[2]; // This is the RGB value for the name of colors shade
n_shade_name = n_match[3]; // This is the text string for the name of colors shade
n_exactmatch = n_match[4]; // True if exact color match, False if close-match

console.log(n_match); // [ '#6495ED', 'Cornflower Blue', false, 'Blue', false ]
```

## Live Demo

This is a live demo of the original ntcjs library

http://chir.ag/projects/name-that-color/#6195ED

## Running the Tests

Make sure you install the necessary dev dependencies needed to run the tests:

```
npm install
```

Then run the tests

```
npm test
```

## Disclaimer

All credit goes to [Chirag Mehta](http://chir.ag/about) for creating the original ntc.js library.
