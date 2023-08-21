document.write("Bai 1: Lấy kết quả giao giữa 2 mảng");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
document.write(`<br/>Mảng ban đầu: arrA = [${arrA}]`);
document.write(`<br/>Mảng ban đầu: arrB = [${arrB}]`);

var newArr = arrA.filter(function (value) {
  if (arrB.includes(value)) {
    return true;
  }
});
// var arrPlus = arrA.concat(arrB);
// var newArr = [];
// for (var i = 0; i < arrPlus.length; i++) {
//   if (!newArr.includes(arrPlus[i])) {
//     console.log(!newArr.includes(arrPlus[i]));
//     console.log(arrPlus[i]);
//     newArr.push(arrPlus[i]);
//   }
// }
// for (let i = 0; i < arrPlus.length; ++i) {
//   if (arrPlus[i] == arrPlus[i + 1]) {
//     newArr.push(arrPlus[i]);
//   }
// return newArr;
// }

document.write(`<br/>Mảng giao các phần tử: newArr = [${newArr}]`);
