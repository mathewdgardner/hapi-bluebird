## hapi-bluebird

[![circle](https://circleci.com/gh/mathewdgardner/hapi-bluebird.svg?style=svg)](https://circleci.com/gh/mathewdgardner/hapi-bluebird)
[![coverage](https://coveralls.io/repos/github/mathewdgardner/hapi-bluebird/badge.svg?branch=master)](https://coveralls.io/github/mathewdgardner/hapi-bluebird?branch=master)
[![npm](https://img.shields.io/npm/v/hapi-bluebird.svg?maxAge=2592000)](https://www.npmjs.com/package/hapi-bluebird)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mathewdgardner/hapi-bluebird/master/LICENSE)

Make [Hapi](https://gitub.com/hapijs/hapi) use [Bluebird](https://github.com/petkaantonov/bluebird) simply by requiring this module.

## Version 2

Version 2 is updated for use with hapi 16+. It also replaces the native Promise library in node with the Bluebird promise object. This forces Hapi to use Bluebird promises.

## Usage

```javascript
const Bluebird = require('bluebird');
const Hapi = require('hapi');

require('hapi-bluebird');

const server = new Hapi.Server();
server.connection();

const promise = server.start();

console.log(promise instanceof Bluebird); // true
```

## License

This software is licensed under [the MIT license](LICENSE.md).
