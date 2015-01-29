(function () {
  'use strict';

  var sentencify = function (words) {
    var sentence = '',
        i;
    for (i in words) {
      sentence += words[i];
      if (i < words.length-1) {
        sentence += ' ';
      }
    }
    return sentence;
  };

  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
