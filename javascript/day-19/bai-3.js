var arr3 = [
  ["a", 1, true],
  ["b", 2, false],
];
var newArr3 = [];
var result = [[], [], []];

arr3.filter(function (value) {
  return (newArr3 = newArr3.concat(value));
});
result.filter(function (item) {
  if (typeof item === "string") {
    result[0].push(item);
  } else if (typeof item === "number") {
    result[1].push(item);
  } else if (typeof item === "boolean") {
    result[2].push(item);
  }

  return result;
});
document.write(`<br/><br/>Bai 3 Làm chưa ra, xem giúp sai chỗ nào`);
document.write(`<br/>var newArr3 = [];
<br/>var result = [[], [], []];

<br/>arr3.filter(function (value) {
  return (newArr3 = newArr3.concat(value));
});
<br/>result.filter(function (item) {
  <br/>if (typeof item === "string") {
   <br/> result[0].push(item);
  <br/>} else if (typeof item === "number") {
   <br/> result[1].push(item);
  <br/>} else if (typeof item === "boolean") {
   <br/> result[2].push(item);
  <br/>}

  <br/>return result;
<br/>});`);
console.log(newArr3);
console.log(result);
