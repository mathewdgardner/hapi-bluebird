'use strict';

const Bluebird = require('bluebird');
const expect = require('chai').expect;
const Hapi = require('hapi');

require('../index');

describe('hapi promises', () => {
  it('should be bluebird promises', () => {
    const server = new Hapi.Server();
    server.connection();

    const promise = server.start()
      .finally(() => server.stop());

    expect(promise instanceof Bluebird).to.be.true;
  });

  it('should be bluebird promises with rejection', () => {
    const server = new Hapi.Server();

    const promise = server.start()
      .catch(() => {})
      .finally(() => server.stop());

    expect(promise instanceof Bluebird).to.be.true;
  });
});
