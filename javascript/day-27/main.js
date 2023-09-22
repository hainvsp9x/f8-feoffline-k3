//Tạo các element
var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var parentDot = document.querySelector(".dots ul");

//Lấy ra danh sách các item
var carouselItems = carouselInner.children;
//Tính chiều rộng của 1 item
var itemWidth = carouselInner.clientWidth; // Lấy chiều rộng của 1 element
// Tính tổng chiều rộng các items
var totalWidth = itemWidth * carouselItems.length;
//Cập nhật css
carouselInner.style.width = `${totalWidth}px`;

//Xử lý chuyển slide
var position = 0;

nextBtn.addEventListener("click", function () {
  // Chặn nếu chạy hết slide
  if (Math.abs(position) >= totalWidth - itemWidth) {
    position += totalWidth;
    carouselInner.style.translate = `${position}px`;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
});

prevBtn.addEventListener("click", function () {
  // Chặn nếu chạy hết slide
  if (Math.abs(position) <= 0) {
    position -= totalWidth;
    carouselInner.style.translate = `${position}px`;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});

var dotIndex;
for (var i = 0; i < carouselItems.length; i++) {
  const dotItem = document.createElement("li");
  dotItem.classList.add("dot-item");
  if (i === 0) {
    dotItem.classList.add("active");
    dotIndex = i;
  }
  parentDot.append(dotItem);
}

var indexActive = 0;
var dots = document.querySelectorAll(".dot-item");
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function (e) {
    dots.forEach(function (dot) {
      if (dot.classList.contains("active")) {
        dot.classList.remove("active");
      }
    });
    console.log(typeof carouselItems);
    var indexImg = 0;
    var itemImgs = Object.keys(carouselItems);
    console.log(typeof itemImgs);

    dot.classList.add("active");
    var currentIndex = dots[index];
  });
});
