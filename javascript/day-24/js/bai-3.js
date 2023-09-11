function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
console.log(getRandomColor());
var randomColor = document.querySelector(".random-color");
Object.assign(randomColor.style, {
  backgroundColor: getRandomColor(),
  color: getRandomColor(),
  width: "300px",
  height: "200px",
});
// randomColor.style.backgroundColor = getRandomColor();
// randomColor.style.color = getRandomColor();
