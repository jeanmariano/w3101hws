(function () {
  'use strict';
  module.exports = function(path,comp,func) {
    var FileFinder = require('./FileFinder'),
        CsvParser = require('./CsvParser'),
        file, csv, result;

    FileFinder(path,'csv',function (err,buf) {
      if (err) {
        return func(err,'');
      }
      file = buf;
      csv = new CsvParser(file);
      result = csv.compute(comp.cells,comp.func);
      return (func(err,result));
    });
  };
})();
