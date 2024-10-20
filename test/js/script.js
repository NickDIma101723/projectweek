const items = document.querySelectorAll(".slider .list .item");
const thumbnails = document.querySelectorAll(".thumbnail .item");
let itemActive = 0;

const backgroundAudio = document.getElementById("myAudio");
const clickAudio = document.getElementById("myAudio1");

document.getElementById("next").onclick = () => changeSlide(1);
document.getElementById("prev").onclick = () => changeSlide(-1);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.onclick = () => {
    itemActive = index;
    showSlider();
  };
});

let refreshInterval = setInterval(() => changeSlide(1), 10000);

function changeSlide(direction) {
  itemActive = (itemActive + direction + items.length) % items.length;
  showSlider();
}

function showSlider() {
  items.forEach((item, index) => {
    item.classList.toggle("active", index === itemActive);
  });
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === itemActive);
  });

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => changeSlide(1), 5000);
}

document.addEventListener("click", function () {
  backgroundAudio.muted = false;
  backgroundAudio.play();
  backgroundAudio.volume = 0.3;
});

function playClickAudio() {
  clickAudio.currentTime = 0;
  clickAudio.play();
}

document.getElementById("next").addEventListener("click", () => {
  playClickAudio();
});

document.getElementById("prev").addEventListener("click", () => {
  playClickAudio();
});
