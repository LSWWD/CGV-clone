const slideNextList = document.querySelector(".slide-next");
//ul태그 선택
let classList = slideNextList.parentElement.nextElementSibling;
let liList = classList.getElementsByTagName("li");

function transformPrev(event) {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;

  const classList = slidePrev.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  if (Number(activeLi) < 0) {
    activeLi = Number(activeLi) + 216 * 5;

    slideNext.classList.add("slide-next-hover");
    slideNext.addEventListener("click", transformNext);
    if (Number(activeLi) === 0) {
      slidePrev.classList.remove("slide-prev-hover");
      slidePrev.removeEventListener("click", transformPrev);
    }
  }

  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

function transformNext(event) {
  const slideNext = event.target;
  const slidePrev = slideNext.previousElementSibling;

  //ul태그 선택
  const classList = slideNext.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  if (classList.clientWidth < liList.length * 216 + Number(activeLi)) {
    activeLi = Number(activeLi) - 216 * 5; //왼쪽으로 이동

    if (Number(activeLi) === -1080) {
      slideNext.classList.remove("slide-next-hover");
      slideNext.removeEventListener("click", transformNext);
    }

    slidePrev.classList.add("slide-prev-hover");
    slidePrev.addEventListener("click", transformPrev);
  }
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
}

if (classList.clientWidth < liList.length * 216) {
  slideNextList.classList.add("slide-next-hover");
  slideNextList.addEventListener("click", transformNext);
}

//공지사항 이미지
const pauseBtn = document.querySelector(".notice-btn");
let btnToggle = true;

const imgBox = document.querySelector(".main__notice--img");
const img = document.querySelector(".notice-img");
const imgArray = [
  "./notices/images/notice-img1.png",
  "./notices/images/notice-img2.png",
];
let imgIdx = 0;
function changeImg() {
  img.setAttribute("src", imgArray[imgIdx]);
  imgIdx++;
  if (imgIdx >= imgArray.length) {
    imgIdx = 0;
  }
}
const repeatIdx = () => setInterval(changeImg, 2000);
let intervalIdx = repeatIdx();
pauseBtn.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle === true) {
    pauseBtn.innerHTML = '<i class="far fa-pause-circle"></i>';
    clearInterval(intervalIdx);
    intervalIdx = repeatIdx();
  } else {
    pauseBtn.innerHTML = '<i class="far fa-play-circle"></i>';
    clearInterval(intervalIdx);
  }
});
