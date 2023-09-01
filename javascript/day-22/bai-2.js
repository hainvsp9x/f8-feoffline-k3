Array.prototype.reduce2 = function (callback, result) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

var numbers = [3, 6, 9, 8, 12];
var result = numbers.reduce2(function (total, number) {
  return total + number;
});
console.log(result);
