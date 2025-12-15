(function() {
  document.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const audio = document.getElementById("audio");

    if (!urlParams.has('silence')) {
      audio.play();
    }

    document.body.addEventListener("click", (event) => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
})();
