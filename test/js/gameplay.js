document.addEventListener("DOMContentLoaded", function () {
  const backgroundAudio = document.getElementById("myAudio");

  document.addEventListener("click", function () {
    if (backgroundAudio.paused) {
      backgroundAudio.muted = false;
      backgroundAudio.play();
      backgroundAudio.volume = 0.3;
    }
  });
});
