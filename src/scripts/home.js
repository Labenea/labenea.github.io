var start = () => {
  setInterval(
    (appear = () => {
      var card = document.querySelector("#card-sec");
      var Jtext = document.querySelector(".intro");
      Jtext.classList.add("appear");
      card.classList.add("appear");
    }),
    500
  );
};
function scrollFunction() {
  var Jtext = document.querySelector(".intro");
  var navbar = document.querySelector("#navBar");
  var navpos = navbar.getBoundingClientRect().top;
  var Jpos = Jtext.getBoundingClientRect().top;
  window.addEventListener("scroll", () => {
    var curScroll = window.pageYOffset / 2;

    if (curScroll <= Jpos) {
      opacity = 1 - (curScroll / Jpos) * 2;
    } else {
      opacity = 0;
    }

    if (curScroll > navpos) {
      navbar.classList.add("nav-scroll");
    } else if (curScroll == navpos) {
      navbar.classList.remove("nav-scroll");
    }
    Jtext.style.opacity = opacity;
  });
}
window.onbeforeunload = function () {
  var bod = document.querySelector("body");
  bod.style.display = "none";
  window.scrollTo(0, 0);
};
start();
window.addEventListener("scroll", scrollFunction());
