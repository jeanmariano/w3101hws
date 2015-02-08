(function () {
  'use strict';
  module.exports = function(input) {
    this.csv = [];
    var byline = input.trim().split('\n');
    for (var i in byline) {
      var bycomma = byline[i].split(',');
      this.csv.push(bycomma);
    }
    this.compute = function(cells,func) {
      var first = this.csv[cells[0].row][cells[0].col],
          second = this.csv[cells[1].row][cells[1].col];
      return func(first,second);
    };
    return this;
  };
})();
