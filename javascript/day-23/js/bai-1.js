function sum(...numbers) {
  var total = 0;
  if (!Number.isNaN(numbers) || typeof numbers === "number") {
    for (var i = 0; i < numbers.length; i++) {
      total += Number(numbers[i]);
    }
  } else {
    console.log("Number khong hop le");
  }
  return total;
}

console.log(sum(2, -5, 56, "89", 99));

var total = (...args) =>
  args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
console.log(total(9, "2", "1", "a"));
console.log(total(9, "2", "1", [4], true));
