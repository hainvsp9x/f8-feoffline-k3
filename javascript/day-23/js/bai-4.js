Array.prototype.filter2 = function (callback) {
  let output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output[output.length] = this[index];
      }
    }
  }
  return output;
};

var numbers = [5, 9, 3, 8, 7, 56, 96, 100, 268];
var result = numbers.filter2(function (number) {
  return number >= 100;
});
console.log(result);
