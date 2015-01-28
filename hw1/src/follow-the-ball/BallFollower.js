(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    this.start = start;
    this.swaps = swaps;
    this.swap = function() {
      for (var i in this.swaps) {
        var cur = this.swaps[i],
            j = cur.indexOf(this.start);
        if (j !== -1) { // if swaps contain start
          this.start = cur[1-j]; // take the value of the swap position
        }
      }
      return this.start;
    }
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
