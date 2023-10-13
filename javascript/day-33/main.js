var counter = document.querySelector(".count-down");
var getLink = document.querySelector(".get-link button");

var countDown = 29;
counter.innerText = countDown;

var start = 0;

var handleCount = function (startTime) {
  if (countDown > 0) {
    requestAnimationFrame(handleCount);
  } else {
    getLink.disabled = false;
    getLink.addEventListener("click", function () {
      window.location.href = "https://www.youtube.com/";
    });
  }

  if (startTime >= start) {
    --countDown;
    start = startTime + 1000;
    counter.innerText = countDown;
  }
};
handleCount();
