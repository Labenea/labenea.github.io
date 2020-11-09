
function scrollFunction() {
  var navbar = document.querySelector("#navBar");
  var navpos = navbar.getBoundingClientRect().top;
  window.addEventListener("scroll", () => {
    var curScroll = window.pageYOffset / 2;

    if (curScroll > navpos) {
      navbar.classList.add("nav-scroll");
    } else if (curScroll == navpos) {
      navbar.classList.remove("nav-scroll");
    }
  });
}

window.addEventListener("scroll", scrollFunction());
