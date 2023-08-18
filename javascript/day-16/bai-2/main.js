var electric = function (k) {
  var priceE1 = 1.678;
  var priceE2 = 1.734;
  var priceE3 = 2.014;
  var priceE4 = 2.536;
  var priceE5 = 2.834;
  var priceE6 = 2.927;
  var total = 0;
  if (k > 0 && k <= 50) {
    total = k * 1.678;
  } else if (k <= 100) {
    total = 50 * priceE1 + (k - 50) * priceE2;
  } else if (k <= 200) {
    total = 50 * priceE1 + 50 * priceE2 + (k - 100) * priceE3;
  } else if (k <= 300) {
    total = 50 * priceE1 + 50 * priceE2 + 100 * priceE3 + (k - 200) * priceE4;
  } else if (k <= 400) {
    total =
      50 * priceE1 +
      50 * priceE2 +
      100 * priceE3 +
      100 * priceE4 +
      (k - 300) * priceE5;
  } else {
    total =
      50 * priceE1 +
      50 * priceE2 +
      100 * priceE3 +
      100 * priceE4 +
      100 * priceE5 +
      (k - 400) * priceE6;
  }
  return total;
};
electric(49);
