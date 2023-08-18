var payTaxi = function (n) {
  var total = 0;
  if (n <= 1) {
    total = 15000;
  } else if (n > 1 && n <= 5) {
    total = 15000 + (n - 1) * 13500;
  } else if (n > 5) {
    total = 15000 + 4 * 13500 + (n - 1) * 11000;
  } else {
    if (n > 120) {
      total = (15000 + 4 * 13500 + 115 * 11000 + (n - 120) * 11000) * 0.9;
    }
  }
  return total;
};

payTaxi(120);
