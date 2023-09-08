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
