var bieuThuc = function (n) {
  var s = 0;
  for (var i = 1; i <= n; i++) {
    s = i * (i + 1);
  }
  return s;
};
