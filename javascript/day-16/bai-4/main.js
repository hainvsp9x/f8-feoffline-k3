function kiem_tra_snt(n) {
  var flag = true;

  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    for (var i = 3; i < Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag == true) {
    document.write(n + " là số nguyên tố <br/>");
  } else {
    document.write(n + " không phải là số nguyên tố <br/>");
  }
}
