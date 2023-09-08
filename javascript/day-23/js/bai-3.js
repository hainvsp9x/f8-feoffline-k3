Array.prototype.push2 = function (value) {
  this[this.length] = value;
  return this;
};
var arr = [1, 2, 3, 4, 5];
console.log(arr.push2(7));
