// var covua = function () {

//   for (var i = 1; i <= 64; i++) {
//     for (var j = 1; j <= 64; j++) {
//       if ((i + j) % 2 === 0) {
//         document.write("B");
//       } else {
//         document.write("W");
//       }
//     }
//     document.write("</br>");
//   }
// };
// covua();

var chess = function () {
  let board = "";
  for (var i = 1; i <= 8; i++) {
    for (var j = 0; j <= 8; j++) {
      if (board.indexOf(i + " " + j) == -1) {
        i % 2 === j % 2 ? (board += "W") : (board += "B");
      }
    }
    board += "\n";
  }
  console.log(board);
};
chess();
