const suiteCinema = document.querySelector(".suite-cinema");
const skyBox = document.querySelector(".sky-box");
const dX = document.querySelector(".DX");
const cineDechef = document.querySelector(".cine-de-chef");

const suitePicture = document.querySelector(".suite-picture");

/* 마우스 hover시에 좌측 사진변화 */
suiteCinema.addEventListener("mouseover", () => {
  suitePicture.innerHTML =
    '<div class="picture"><img src="./image1/suite cinema.png" alt=""></div>';
});

skyBox.addEventListener("mouseover", () => {
  suitePicture.innerHTML =
    '<div class="picture"><img src="./image1/sky box.png" alt=""></div>';
});

dX.addEventListener("mouseover", () => {
  suitePicture.innerHTML =
    '<div class="picture"><img src="./image1/4DX.png" alt=""></div>';
});

cineDechef.addEventListener("mouseover", () => {
  suitePicture.innerHTML =
    '<div class="picture"><img src="./image1/cine de chef.png" alt=""></div>';
});


