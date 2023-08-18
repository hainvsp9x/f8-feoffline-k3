var numbers = [1, 2, 3, 5, 7, 13, 6, 8, 9, 10, 12];

function isprime(n) {
  let flag = 1;

  if (n < 2) return (flag = 0);

  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }

  return flag;
}

var count = 0;
var sum = 0;
for (var value of numbers) {
  if (isprime(value)) {
    count++;
    sum += value;
  }
}
if (count == 0) {
  console.log(count);
  document.write(`Khong co so nguyen to`);
} else {
  sum /= count;
  //   console.log(sum);
  //   console.log(count);
  document.write(`<br/>Trung binh so nguyen to trong mang: ${sum}`);
}
document.write(`<br/><br/> Bai 2`);
document.write(`<br/>Mang cho tr: ${numbers}`);
document.write(`<br/>Trung binh so nguyen to trong mang: ${sum}`);
