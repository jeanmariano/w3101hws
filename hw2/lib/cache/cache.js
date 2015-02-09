(function () {
  'use strict';
  module.exports = function (func) {
    var res = {},
        arg, key, calc;

    return function () {
      arg = Array.prototype.slice.apply(arguments);
      key = JSON.stringify(arg);

      if (key in res) {
        return res[key];
      } else {
        calc = func.apply(null,arg);
        res[key] = calc;
        return calc;
      }
    };
  };
})();

