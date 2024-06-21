const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when a is 1 and b is 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a is 1 and b is 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when a is 1.2 and b is 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when a is 1.5 and b is 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('should return 0 when a is 0.1 and b is 0.1', function() {
    assert.strictEqual(calculateNumber(0.1, 0.1), 0);
  });

  it('should return -2 when a is -1.4 and b is -0.6', function() {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });
});

