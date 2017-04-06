const when = require('../../src/index');

describe('tiny-when', function() {
  beforeEach(function() {
    this.shouldFail = () => {
      throw 'Should fail';
    };
  });

  it('should reject promise when condition is not met in X ms', function() {
    const options = {
      intervalInMs: 1,
      maxChecks: 2,
    };

    return when(() => false, options).then(this.shouldFail, () => {});
  });

  it('should check condition 3 times', function() {
    const options = {
      intervalInMs: 1,
      maxChecks: 3,
    };

    const condition = jasmine.createSpy().and.returnValue(false);

    return when(condition, options).then(this.shouldFail, () => {
      expect(condition.calls.count()).toBe(3);
    });
  });

  it('should resolve promise when condition is met in X ms', function() {
    const options = {
      intervalInMs: 1,
      maxChecks: 5,
    };

    let foo = false;

    function condition() {
      return foo;
    }

    const promise = when(condition, options);

    setTimeout(() => {
      foo = true;
    }, 2);

    return promise;
  });

  it('should use default options and check the condition 30 times every 300ms', function() {
    jasmine.clock().install();

    const condition = jasmine.createSpy().and.returnValue(false);

    const promise = when(condition);
    jasmine.clock().tick(9000);
    return promise.then(this.shouldFail, () => {
      expect(condition.calls.count()).toBe(30);
      jasmine.clock().uninstall();
    });
  });
});
