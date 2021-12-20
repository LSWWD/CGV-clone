const playBtn = document.getElementById("play");
const volumeBtn = document.getElementById("volume");
const screen = document.querySelector("video");
let togglePlay = true;
let toggleMute = true;

//Play 버튼
playBtn.addEventListener("click", () => {
  togglePlay = !togglePlay;
  if (togglePlay === false) {
    playBtn.innerHTML = `<i class="far fa-play-circle"></i>`;
    screen.pause();
  } else {
    screen.play();
    playBtn.innerHTML = `<i class="far fa-pause-circle">`;
  }
});
// Mute 버튼
volumeBtn.addEventListener("click", () => {
  toggleMute = !toggleMute;
  if (toggleMute === false) {
    screen.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  } else {
    screen.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-down"></i>`;
  }
});

screen.addEventListener("ended", () => {
  togglePlay = !togglePlay;
  playBtn.innerHTML = `<i class="far fa-play-circle"></i>`;
});
