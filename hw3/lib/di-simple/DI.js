(function () {
  'use strict';

  var cache = {};

  module.exports = {
    modules: {},
    module: function(name,dependencies) {
      var module = {
        name: name,
        dependencies: cache,
        register: function(funcname,func) {
          cache[funcname] = func;
        },
        resolve: function(func) {
        // resolve: function(args) {
          var args = this.getArgs(func);
          var dep = [];
          for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (arg.charAt(0) === ' ') {
              arg = arg.substring(1);
            }
            if (arg in cache) {
              dep.push(cache[arg]);
            } else {
              dep.push(undefined);
            }
          }
          return dep;
        },
        inject: function(func) {
          // var args = this.getArgs(func);
          // return function() {
          //   var dependenciesToPassIn = args.map(function(args) {
          //     for (var i = 0; i < args.length; i++) {
          //       var arg = args[i];
          //       if (arg.charAt(0) === ' ') {
          //         arg = arg.substring(1);
          //       }
          //       if (arg in cache) {
          //         return cache[arg];
          //       } else {
          //         return undefined;
          //       }
          //     }
          //   });
          //   return func.apply(null,dependenciesToPassIn);
          // }
          var args = this.resolve(func);
          return func.bind.apply(func,[null].concat(args));
        },
        getArgs: function(func) {
          // This regex is from require.js
          var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
          var args = func.toString().match(FN_ARGS)[1].split(',');
          return args;
        },
        getRegisteredFunc: function(func) {
          return func;
        }
      };
      return module;
    },
  };

})();
