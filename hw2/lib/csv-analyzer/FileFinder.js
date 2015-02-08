(function () {
  'use strict';
  module.exports = function(path,ext,func) {
    var fs = require('fs');
    var str;

    function read(callback) {
      fs.readFile('lib/csv-analyzer/csvfile.csv',function(err,buf) {
        str = buf.toString();
        callback(err,buf);
      });
    }

    function pr() {
      console.log(str);
    }

    read(func);
  };
})();
