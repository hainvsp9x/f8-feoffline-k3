var arrSort = [3, 2, 4, 6, 8, 9, 1];
var element = 4;
arrSort[arrSort.length] = element;
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let idmin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[idmin]) idmin = j;
    }

    // swap
    let t = array[i];
    array[i] = array[idmin];
    array[idmin] = t;
  }
  return array;
}
var newSort = selectionSort(arrSort);

document.write(`<br/><br/>Bai 4`);
document.write(` <br/>Mang cho trc: ${arrSort}`);
document.write(`<br/>Element: ${element}`);
document.write(`<br/>Mang sau sap xep: ${newSort}`);
