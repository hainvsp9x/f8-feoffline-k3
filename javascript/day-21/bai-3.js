var data = [];
var register = function (name, password, phone) {
  if (!name && !number && !phone) {
    console.log("Bạn chưa điền đủ thông tin");
  }
  var obj = {};
  obj.name = name;
  obj.password = password;
  obj.phone = phone;
  obj.role = "user";
  data.push(obj);
  console.log(data);
};
register(
  "nguyen van a",
  "1224645",
  "321546541354"
  //   "nguyen van b",
  //   "1224646",
  //   "321546541356",
  //   "nguyen van c",
  //   "1224647",
  //   "321546541358",
  //   "nguyen van d",
  //   "1224648",
  //   "321546541350"
);

var handleLogin = function (name, password) {
  var userLogin = data.find(function (val) {
    return val.name === name && val.password === password;
  });
  if (userLogin) {
    console.log(userLogin);
  } else {
    console.log("Thông tin đăng nhập ko hợp lệ");
  }
};
handleLogin("nguyen van a", "1224645");
