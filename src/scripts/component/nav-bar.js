class NavBar extends HTMLElement {
  connectedCallback() {
    var current = location.pathname.split("/")[1];
    this.render(current);
  }

  render(current) {
    this.innerHTML = `
        <div id="navbar" class="container">
        <div
          class="flex-container align-center justify-space-between responsive-nav"
        >
          <div class="brand">
            <h1 class="navbar-brand"><a href="#">Labenea</a></h1>
            <a href="" id="press" class="icon">
              <i class="fa fa-bars"></i>
            </a>
          </div>
          <div id="menu" class="menu">
            <ul>
            <li class="${
              current == "" ? "active" : ""
            }"><a href="/">Home</a></li>
            <li class="${
              current == "covid-monitor.html" ? "active" : ""
            }"><a href="/covid-monitor.html">Covid Monitor</a></li>
            <li class="${
              current == "about.html" ? "active" : ""
            }"><a href="/about.html">About</a></li>
            </ul>
          </div>
        </div>
      </div>

        `;
    this.querySelector("#press").addEventListener("click", (event) => {
      event.preventDefault();
      var x = this.querySelector("#menu");
      if (x.className === "menu") {
        x.className += " opened";
      } else {
        x.className = "menu";
      }
    });
  }
}
customElements.define("nav-bar", NavBar);
