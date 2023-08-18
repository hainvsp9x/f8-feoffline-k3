var dequy = function (n) {
  if (n === 1) {
    return 1;
  } else {
    return 1 + 1 / n + dequy(n - 1);
  }
};
dequy(6);
