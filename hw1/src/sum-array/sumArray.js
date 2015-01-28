(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    return values.reduce(function(i,j) {
      return i+j;
    });
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
