# distance-utils
A set of utilities for converting and formatting distances.

[![npm version](https://img.shields.io/npm/v/@ericgio/distance-utils.svg?style=flat-square)](https://www.npmjs.com/package/@ericgio/distance-utils)
[![npm downloads](https://img.shields.io/npm/dm/@ericgio/distance-utils.svg?style=flat-square)](https://www.npmjs.com/package/@ericgio/distance-utils)
[![build status](https://img.shields.io/travis/ericgio/distance-utils/master.svg?style=flat-square)](https://travis-ci.org/ericgio/distance-utils)
[![Coveralls github](https://img.shields.io/coveralls/github/ericgio/distance-utils/master.svg?style=flat-square)](https://coveralls.io/github/ericgio/distance-utils)
[![MIT License](https://flat.badgen.net/github/license/ericgio/distance-utils)](LICENSE.md)

## Installation

```
npm install --save @ericgio/distance-utils
```
or
```
yarn add @ericgio/distance-utils
```

## Functions

#### formatDistance
Formats distance measurements, by stripping trailing zeroes and restricting floats to at most 2 decimal places.
```js
formatDistance(1.3333) // => '1.33'
formatDistance(1.00)   // => '1'
```

#### round
Rounds a number to a specified level of precision. Similar to [Lodash's round function](https://lodash.com/docs/4.17.15#round).
```js
round(4.006)    // => 4
round(4.006, 2) // => 4.01
round(4060, -2) // => 4100
```

#### milesToKm
Converts miles to kilometers.
```js
milesToKm(6.21)     // => 10
milesToKm(6.21, 1)  // => 10.0
```

#### metersToMiles
Converts meters to miles.
```js
metersToMiles(10000)    // => 6.21
metersToMiles(10000, 1) // => 6.2
```

#### metersToFeet
Converts meters to feet.
```js
metersToFeet(1582)  // => 5190
metersToFeet(1, 2)  // => 3.28
```

## License
[MIT](https://github.com/ericgio/distance-utils/blob/master/LICENSE.md)
