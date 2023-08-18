var arrNum = [1, 5, 6, 8, 12, 29];
var max = 0;
var index = 0;
for (var i = 0; i <= arrNum.length; i++) {
  if (max < arrNum[i]) {
    max = arrNum[i];
    index = i;
  }
}
document.write(`<br/> Bai 1 <br/>`);
document.write(
  `Mang : ${arrNum} <br/> So lon nhat la: ${max} <br/> index la: ${index}`
);
