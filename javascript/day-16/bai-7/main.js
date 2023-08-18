function bangcuuchuong() {
  document.write("<table border=1 width=100%>");
  for (i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (j = 2; j <= 10; j++) document.write(`<td> ${i} x ${j} = ${i * j}`);
    document.write("</td>");
    document.write("</tr>");
  }
  document.write("</tr></table>");
}
bangcuuchuong();
