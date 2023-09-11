function reverse(number) {
  var numReverse = number.toString().split("").reverse().join("");
  console.log(parseInt(numReverse));
  return parseInt(numReverse);
}
reverse("123456789");
