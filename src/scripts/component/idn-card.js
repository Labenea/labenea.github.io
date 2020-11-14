import DataSource from "../data-source/data.js";
import DateConvert from "../date-convert.js";
const data = {
  confirmed: "",
  recovered: "",
  deaths: "",
  lastUpdate: "",
  lastConfirmed: "",
};
class IdnCard extends HTMLElement {
  connectedCallback() {
    this.renderLoad();
    DataSource.getIndData()
      .then((res) => {
        data.confirmed = res.confirmed.value;
        data.recovered = res.recovered.value;
        data.deaths = res.deaths.value;
        data.lastUpdate = DateConvert.convertDate(res.lastUpdate);
      })
      .then(() => {
        DataSource.getDailyInd(1).then((res) => {
          data.lastConfirmed = data.confirmed - res.confirmed;

          this.render();
        });
      });
  }

  renderLoad() {
    this.innerHTML = `
            <h1 >INDONESIA CASES</h1>
            <p> Last Updated :</p>
            <div class=" container responsive-flex d-flex justify-space-between flex-warp ">
                <div class="c-card">
                    <div class="loader animate"></div>
                        <h1 class="text-warning" >0</h1>
                        <p  class="text-warning-darken">0</p>
                        <h5>Confirmed</h5>
                </div>
                <div class="c-card">       
                <div class="loader animate"></div>       
                        <h1 class="text-success">0</h1>
                        <p class="text-success-darken">0</p>
                        <h5>Recovered</h5>            
                </div>
                <div class="c-card">     
                <div class="loader animate"></div>
                        <h1 class="text-danger">0</h1>
                        <p class="text-danger-darken">0</p>
                        <h5>Deaths</h5>
                </div>
            </div>
        `;
  }
  render() {
    this.innerHTML = `
      <h1 >INDONESIA CASES</h1>
      <p> Last Updated : ${data.lastUpdate}</p>
      <div class=" container responsive-flex d-flex justify-space-between flex-warp ">
          <div class="c-card">
              <div class="loader "></div>
                  <h1 class="text-warning">${new Intl.NumberFormat(
                    "ID-IN"
                  ).format(data.confirmed)}</h1>
                  <p class="text-warning-darken">+${new Intl.NumberFormat(
                    "ID-IN"
                  ).format(data.lastConfirmed)}</p>
                  <h5>Confirmed</h5>
          </div>
          <div class="c-card">       
          <div class="loader "></div>       
                  <h1 class="text-success">${new Intl.NumberFormat(
                    "ID-IN"
                  ).format(data.recovered)}</h1>
                  <p class="text-success-darken">${Math.round(
                    (data.recovered / data.confirmed) * 100
                  )}%</p>
                  <h5>Recovered</h5>            
          </div>
          <div class="c-card">     
          <div class="loader "></div>
                  <h1 class="text-danger">${new Intl.NumberFormat(
                    "ID-IN"
                  ).format(data.deaths)}</h1>
                  <p class="text-danger-darken">${Math.round(
                    (data.deaths / data.confirmed) * 100
                  )}%</p>
                  <h5>Deaths</h5>
          </div>
      </div>
      `;
  }
}

customElements.define("idn-card", IdnCard);
