Array.prototype.push2 = function (...args) {
  for (var i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length;
};
var arr = [1, 2, 3, 4, 5];
console.log(arr.push2(7, 8, 9));
