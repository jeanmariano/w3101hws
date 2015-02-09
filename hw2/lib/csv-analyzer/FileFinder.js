(function () {
  'use strict';
  module.exports = function(path,ext,func) {
    var fs = require('fs'),
        file, i;
    fs.readdir(path,function(err,files) {
      if (err) {
        return func(err,'');
      }
      for (i in files) {
        if (files[i].indexOf(ext) !== -1) {
          file = files[i];
          break;
        }
      }
      if (file === undefined) {
        return func('Unable to find '+ext+' file','');
      }
      fs.readFile(path+file,'utf8',function(err,buf) {
        if (err) {
          throw err;
        }
        return func(err,buf);
      });
    });
  };
})();
