(function () {
  'use strict';
  module.exports = function (func) {
    var res = {};

    return function () {
      var arg = Array.prototype.slice.apply(arguments);
      var key = JSON.stringify(arg);

      if (key in res) {
        return res[key];
      } else {
        var calc = func.apply(null,arg);
        res[key] = calc;
        return calc;
      }
    };
  };
})();

