const boxContainer = document.querySelector(".box-container");
const boxSlide = document.querySelector(".box-slide");
const boxes = document.querySelectorAll(".box");

const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");
const buttonStop = document.querySelector(".stop");
let currentIndex = 0;
let bool = true;

boxes.forEach((box) => {
  box.style.width = `${boxContainer.clientWidth}px`;
});

boxSlide.style.width = `${boxContainer.clientWidth * boxes.length}px`;

buttonLeft.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex;

  boxSlide.style.marginLeft = `-${boxContainer.clientWidth * currentIndex}px`;
  clearInterval(interval);
  interval = getInterval();
});

buttonRight.addEventListener("click", () => {
  currentIndex++;
  currentIndex = currentIndex >= boxes.length ? boxes.length - 1 : currentIndex;
  boxSlide.style.marginLeft = `-${boxContainer.clientWidth * currentIndex}px`;
  console.log("hello");
  clearInterval(interval);
  interval = getInterval();
});

buttonStop.addEventListener("click", () => {
  bool = !bool;
  if (bool === false) {
    clearInterval(interval);
    buttonStop.innerHTML = "Play";
  } else {
    interval = getInterval();
    buttonStop.innerHTML = "Stop";
  }
});

const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= boxes.length ? 0 : currentIndex;
    boxSlide.style.marginLeft = `-${boxContainer.clientWidth * currentIndex}px`;

    if (currentIndex === 0) {
      buttonLeft.style.width = "0px";
      buttonLeft.innerHTML = "";
    } else {
      buttonLeft.style.width = "30px";
      buttonLeft.innerHTML = `<i class="fas fa-chevron-right">`;
    }
  }, 2000);
};

let interval = getInterval();
