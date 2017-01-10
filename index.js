'use strict';

const B = require('bluebird');

Promise = B; // eslint-disable-line

require('hapi/lib/promises').wrap = function(bind, method, args) {
  return new B.Promise((resolve, reject) => {
    const callback = (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    };

    method.apply(bind, args ? args.concat(callback) : [ callback ]);
  });
};
