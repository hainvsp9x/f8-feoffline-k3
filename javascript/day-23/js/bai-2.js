// const VND = new Intl.NumberFormat("vi-VN", {
//   style: "currency",
//   currency: "VND",
// });
// var price = 1259600086;

// console.log("Việt Nam đồng: " + VND.format(price));

Number.prototype.getCurrency = function () {
  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 9,
  };
  const formated = new Intl.NumberFormat("vi-VN", config).format(this);
  return formated;
};
var price = 12000;
var price2 = 12000000000;

console.log(price.getCurrency());
console.log(price2.getCurrency());
console.log(price.toLocaleString("vi-VN"));
