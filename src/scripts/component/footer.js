class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
           <div class="f-container d-flex flex-column">
               <div class="center h-center">
                 <a class="f-icon" data-aos="zoom-in" data-aos-delay=100 data-aos-anchor-placement="bottom-bottom" href="https://linkedin.com/in/edo-krishnanda-aditya-9386a91b3"><img src="src/assets/icons/linkedin.svg" alt=""></a>
                 <a class="f-icon" data-aos="zoom-in" data-aos-delay=200 data-aos-anchor-placement="bottom-bottom" href="https://github.com/Labenea"><img src="src/assets/icons/github.svg" alt=""></a>
                 <a class="f-icon" data-aos="zoom-in" data-aos-delay=300 data-aos-anchor-placement="bottom-bottom" href="https://wa.me/+6282230115558"> <img src="src/assets/icons/whatsapp.svg" alt=""></a>
                 <a class="f-icon" data-aos="zoom-in" data-aos-delay=400 data-aos-anchor-placement="bottom-bottom" href="https://www.instagram.com/edokrishnanda/"> <img src="src/assets/icons/instagram.svg" alt=""></a>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" class="center h-center">
                   <p>EDO KRISHNANDA &copy;2020 </p>
                </div>
           </div>
        `;
  }
}

customElements.define("c-footer", Footer);
