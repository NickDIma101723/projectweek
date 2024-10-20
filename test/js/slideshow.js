document.addEventListener("DOMContentLoaded", function () {
  const urls = ["index.html", "2.html", "gamepage.html"];

  let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

  const switchPage = (index) => {
    currentIndex = (index + urls.length) % urls.length;
    localStorage.setItem("currentIndex", currentIndex);
    window.location.href = urls[currentIndex];
  };

  setInterval(() => {
    switchPage(currentIndex + 1);
  }, 30000);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      switchPage(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      switchPage(currentIndex - 1);
    }
  });
});
