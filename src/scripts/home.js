var start = () => {
  setInterval(
    (appear = () => {
      var Jtext = document.querySelector(".intro");
      Jtext.classList.add("appear");
    }),
    500
  );
};

function fadeOnScroll() {
  var Jtext = document.querySelector(".intro");
  var Jpos = Jtext.getBoundingClientRect().top;
  window.addEventListener("scroll", () => {
    var curScroll = window.pageYOffset / 2;
    if (curScroll <= Jpos) {
      opacity = 1 - curScroll / Jpos;
    }
    Jtext.style.opacity = opacity;
  });
}

start();
window.addEventListener("scroll", fadeOnScroll());
