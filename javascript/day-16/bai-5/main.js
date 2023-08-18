var n = prompt("Nhap gia tri N");
n = parseInt(n);
function tamgiac(n) {
  var count = 0;
  for (i = 0; i < n; i++) {
    //tao hang (row) *
    for (j = 0; j <= i; j++) {
      ++count;
      document.write(`${count}`);
      document.writeln("");
    }

    document.write("<br/>");
  }
}
tamgiac(n);
