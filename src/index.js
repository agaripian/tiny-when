module.exports = function(condition, options) {
  options = Object.assign({ maxChecks: 30, intervalInMs: 300 }, options);
  return new Promise(function(resolve, reject) {
    var count = 0;

    function when() {
      if (condition()) {
        return resolve();
      }
      count++;
      if (count < options.maxChecks) {
        return setTimeout(when, options.intervalInMs);
      }
      return reject();
    }

    when();
  });
};
