const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when type is SUM, a is 1.4 and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when type is SUBTRACT, a is 1.4 and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when type is DIVIDE, a is 1.4 and b is 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE, a is 1.4 and b is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  // Additional edge cases
  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('MULTIPLY', 1, 2), Error, 'Invalid type');
  });

  it('should handle large numbers for SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4e+10, 4.5e+10), 6e+10);
  });

  it('should handle negative numbers for SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
  });

  it('should handle division resulting in a non-integer', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.2), 2);
  });
});

