const sayHello = require('./app').sayHello;
const assert = require('assert');

describe('App test!', function() {
	it('sayHello should return hello', function (done) {
		assert.equal(sayHello(), 'hello');
		done();
	});
});
