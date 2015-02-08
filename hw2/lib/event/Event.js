(function () {
  'use strict';
  module.exports = function() {
    this.subscribers = [];
    this.subscribe = function(subs) {
      this.subscribers.push(subs);
    };
    this.unsubscribe = function(func) {
      for (var i in this.subscribers) {
        if (this.subscribers[i] === func) {
          this.subscribers.splice(i,1);
        }
      }
    };
    this.emit = function() {
      for (var i in this.subscribers) {
        this.subscribers[i].apply(this,arguments);
      }
    };
    return this;
  };
})();
