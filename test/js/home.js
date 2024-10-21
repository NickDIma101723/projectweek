document.addEventListener("DOMContentLoaded", function () {
  const urls = ["index2.html", "index.html", "gameplay.html"];

  let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

  const switchPage = (index) => {
    currentIndex = (index + urls.length) % urls.length;
    localStorage.setItem("currentIndex", currentIndex);
    window.location.href = urls[currentIndex];
  };

  setInterval(() => {
    switchPage(currentIndex + 1);
  }, 60000);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      switchPage(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      switchPage(currentIndex - 1);
    }
  });

  const backgroundAudio = document.getElementById("myAudio");

  document.addEventListener("click", function () {
    if (backgroundAudio.paused) {
      backgroundAudio.muted = false;
      backgroundAudio.play();
      backgroundAudio.volume = 0.3;
    }
  });
  AOS.init({
    offset: 1,
  });
});
