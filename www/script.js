(function() {
  document.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('silence')) {
      document.getElementById('audio').removeAttribute('autoplay');
    }

    document.body.addEventListener("click", (event) => {
      let audio = document.getElementById("audio");

      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
})();
