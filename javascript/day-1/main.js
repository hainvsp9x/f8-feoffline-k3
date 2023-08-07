//bai 1
// var a = 5,
//   b = 8;

// a += b;
// b = a - b;
// a -= b;
// console.log(`a la: ${a}, b la: ${b}`);

// Bai 2
// var a = 10,
//   b = 20,
//   c = 5;
// var s = a + b + (c ^ 10) / 2;
// console.log(s);
// Bai 3

// var d = 5,
//   e = 20,
//   f = 15,
//   max = d;
// if (max < e) {
//   max = e;
//   console.log(`So lon nhat la: ${max}`);
// } else if (max < f) {
//   max = f;
//   console.log(`So lon nhat la: ${max}`);
// } else {
//   console.log(`So lon nhat la: ${max}`);
// }

//Bai 4
// var a = 5,
//   b = -5;

// if (a > 0 && b > 0) {
//   console.log(`${a} va ${b} cung dau`);
// } else {
//   console.log(`${a} va ${b} trai dau`);
// }

// Bai 5

var a = 22,
  b = 44,
  c = 99;
console.log(`So ban dau la: ${a}, ${b}, ${c}`);

if (a > b) {
  a += b;
  b = a - b;
  a -= b;
} else if (a > c) {
  a += c;
  c = a - c;
  a -= c;
} else if (b > c) {
  b += c;
  c = b - c;
  b -= c;
}
console.log(`thu tu tang dan: ${a}, ${b}, ${c}`);
