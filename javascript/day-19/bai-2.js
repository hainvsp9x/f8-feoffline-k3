document.write(`<br/><br/>Bai 2: Làm phẳng array sau .Chuyển về mảng 1 chiều`);
var arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result2 = [];
var flatten = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result2.push(arr[i]);
    }
  }
  return result2;
};
// Đoạn này bị báo lỗi join
// var result = arr2.map(function (item) {
//   var str = item.join(",");
//   return str;
// });

// console.log(result);
var resultArr = flatten(arr2);
// console.log(resultArr);
document.write(
  `<br/>Mảng gốc: arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]]`
);
document.write(`<br/>Mảng phẳng: result = [${resultArr}]`);
