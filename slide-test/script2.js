const boxContainer = document.querySelector(".box-container");
const boxSlide = document.querySelector(".box-slide");
const boxes = document.querySelectorAll(".box");
let boxIndex = 0;

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

boxes.forEach((box) => {
  box.style.width = `${boxContainer.clientWidth}px`;
});
boxSlide.style.width = `${boxContainer.clientWidth * boxes.length}px`;

console.log(boxContainer.clientWidth);
console.log(boxSlide.style.width);

rightBtn.addEventListener("click", () => {
  console.log("Click");
  Right(boxIndex + 1);
});

function Right(num) {
  boxSlide.style.marginLeft = -num * boxContainer.clientWidth + "px";
  console.log(boxSlide.style.left);
}

function Left(num) {
  boxSlide.style.left = -num + boxContainer.clientWidth + "px";
  currentIndex = num;
}
