(function () {
  'use strict';

  var cache = {};

  module.exports = {
    modules: {},
    module: function(name,dependencies) {
      function register(funcname,func) {
        cache[funcname] = func;
      }
      function inject(func) {
        var args = getArgs(func),
            dependenciesToPassIn = [];
        return function() {
          if (args.length === 1 && args[0] === '') {
            dependenciesToPassIn = [];
          } else {
            dependenciesToPassIn = args.map(function(arg) {
              if (arg.charAt(0) === ' ') {
                arg = arg.substring(1);
              }
              if (arg in cache) {
                return getRegisteredFunc(arg);
              } else {
                return undefined;
              }
            });
          }
          return func.apply(null,dependenciesToPassIn);
        };
      }
      function getArgs(func) {
        // This regex is from require.js
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            args = func.toString().match(FN_ARGS)[1].split(',');
        return args;
      }
      function getRegisteredFunc(arg) {
        return cache[arg];
      }
      var module = {
        name: name,
        dependencies: cache,
        register: register,
        inject: inject,
        getRegisteredFunc: getRegisteredFunc
      };
      return module;
    }
  };
})();
