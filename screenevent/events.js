// 슬라이드 화면
const eventContainer = document.querySelector(".event__box__outer");
const eventSlide = document.querySelector(".event__box__outer__slide");
const eventBoxes = document.querySelectorAll(".event__box__container");
// 버튼
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const stopBtn = document.getElementById("stop-btn");

let boxIndex = 0; // 카운터
let toggle = true; // 토글에 쓸 변수

// 슬라이드의 전체 크기 지정
eventSlide.style.width = `${eventContainer.clientWidth * eventBoxes.length}px`;

// 오른쪽 넘기기 버튼
rightBtn.addEventListener("click", () => {
  boxIndex++;
  boxIndex = boxIndex >= eventBoxes.length ? eventBoxes.length - 1 : boxIndex;
  eventSlide.style.marginLeft = `-${eventContainer.clientWidth * boxIndex}px`;
  if (toggle === false) {
    //버튼 클릭시 반복 중지
    clearInterval(replay);
  } else {
    clearInterval(replay);
    //인터벌 다시 할당
    replay = repeat();
  }
  // 넘기기 시 특정 화면에서 버튼 비활성화
  if (boxIndex > 0) {
    leftBtn.style.visibility = "visible";
  }
  if (boxIndex >= eventBoxes.length - 1) {
    rightBtn.style.visibility = "hidden";
  }
});

//왼쪽 넘기기 버튼
leftBtn.addEventListener("click", () => {
  boxIndex--;
  boxIndex = boxIndex < 0 ? 0 : boxIndex;
  eventSlide.style.marginLeft = `-${eventContainer.clientWidth * boxIndex}px`;
  if (toggle === false) {
    clearInterval(replay);
  } else {
    clearInterval(replay);
    replay = repeat();
  }
  // 넘기기 시 특정 화면에서 버튼 비활성화
  if (boxIndex === 0) {
    leftBtn.style.visibility = "hidden";
  }
  if (boxIndex < eventBoxes.length - 1) {
    rightBtn.style.visibility = "visible";
  }
});

// 토글 버튼
stopBtn.addEventListener("click", () => {
  toggle = !toggle;
  console.log(toggle);
  if (toggle === false) {
    clearInterval(replay);
    stopBtn.innerHTML = `<i class="fas fa-play"></i>`;
  } else {
    clearInterval(replay);
    replay = repeat();
    stopBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  }
});

// 반복할 애니메이션 설정
const roller = () => {
  boxIndex++;
  boxIndex = boxIndex >= eventBoxes.length ? 0 : boxIndex;
  eventSlide.style.marginLeft = `-${eventContainer.clientWidth * boxIndex}px`;

  // 버튼 활성/비활성화
  if (boxIndex == 0) {
    leftBtn.style.visibility = "hidden";
  } else {
    leftBtn.style.visibility = "visible";
  }

  if (boxIndex >= 3) {
    rightBtn.style.visibility = "hidden";
  } else {
    rightBtn.style.visibility = "visible";
  }
};

// setInterval로 함수 반복
const repeat = () => setInterval(roller, 3000);

//인터벌 실행 및 동작을 제어할 변수 선언
let replay = repeat();
