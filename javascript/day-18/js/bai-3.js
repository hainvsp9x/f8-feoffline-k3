var arrFlag = [1, 2, 2, 3, 6, 7, 8, 8, 10, 10, 3];
var newArr = [];
for (var i = 0; i < arrFlag.length; i++) {
  if (!newArr.includes(arrFlag[i])) {
    newArr.push(arrFlag[i]);
  }
}
document.write(`<br/><br/> Bai 3`);
document.write(`<br/> Mang cho trc: ${arrFlag} <br/> mang da loc: ${newArr}`);
