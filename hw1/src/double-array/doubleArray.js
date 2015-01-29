(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    return arrayToDouble.map(function(x) {
      return 2*x;
    });
  };

  module.exports = doubleArray;

})();
