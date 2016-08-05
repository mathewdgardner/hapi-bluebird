'use strict';

const B = require('bluebird');

require('hapi/lib/promises').wrap = function(bind, method, args) {
  return new B.Promise((resolve, reject) => {
    const callback = (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    };

    method.apply(bind, args ? args.concat(callback) : [ callback ]);
  });
};
