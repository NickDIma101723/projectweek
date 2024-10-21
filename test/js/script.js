document.addEventListener("DOMContentLoaded", function () {
  const urls = ["index2.html", "index.html", "gameplay.html"];

  let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

  const switchPage = (index) => {
    currentIndex = (index + urls.length) % urls.length;
    localStorage.setItem("currentIndex", currentIndex);

    const backgroundAudio = document.getElementById("myAudio");
    backgroundAudio.muted = false;
    backgroundAudio.currentTime = 0;
    backgroundAudio.play();

    window.location.href = urls[currentIndex];
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      switchPage(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      switchPage(currentIndex - 1);
    }
  });

  const backgroundAudio = document.getElementById("myAudio");
  const clickAudio = document.getElementById("myAudio1");

  document.addEventListener("click", function () {
    if (backgroundAudio.paused) {
      backgroundAudio.muted = false;
      backgroundAudio.play();
      backgroundAudio.volume = 0.3;
    }
  });

  const items = document.querySelectorAll(".slider .list .item");
  const thumbnails = document.querySelectorAll(".thumbnail .item");
  let itemActive = 0;

  document.getElementById("next").onclick = () => {
    changeSlide(1);
    playClickAudio();
  };

  document.getElementById("prev").onclick = () => {
    changeSlide(-1);
    playClickAudio();
  };

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.onclick = () => {
      itemActive = index;
      showSlider();
    };
  });

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
  }

  function playClickAudio() {
    clickAudio.currentTime = 0;
    clickAudio.play();
  }
});
