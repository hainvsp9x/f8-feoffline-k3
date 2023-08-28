var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  { name: "Nguyễn Văn D", age: 1, address: "TP.HCM" },
  { name: "Nguyễn Văn E", age: 102, address: "TP.HCM" },
  { name: "Nguyễn Văn F", age: 32, address: "TP.HCM" },
];

var createCustomers = (n) => {
  n.sort(function (a, b) {
    if (a.age < b.age) {
      return -1;
    }
  });
  n.map((value) => {
    // console.log(value.name);
    var name = value.name;
    var positionStart = name.indexOf(" ");
    var positionEnd = name.lastIndexOf(" ");
    str = name.slice(0, positionStart) + name.slice(positionEnd);
    value.shortName = str;
    return value;
  });
  return n;
};
console.log(createCustomers(customers));
