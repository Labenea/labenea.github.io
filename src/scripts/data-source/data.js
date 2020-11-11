import Axios from "axios";
import DateConvert from "../date-convert.js";

const baseURL = "https://covid19.mathdro.id/api";

class DataSource {
  static getIndData() {
    return Axios.get(`${baseURL}/countries/indonesia`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static getDailyInd(a) {
    const date = DateConvert.getDateData(a);
    return Axios.get(`${baseURL}/daily/${date}`)
      .then((res) => {
        let result = res.data.filter((obj) => {
          return obj.countryRegion == "Indonesia";
        });
        return result.shift();
      })
      .catch(() => {
        return this.getDailyInd(a + 1);
      });
  }
  static getGlbData() {
    return Axios.get(`${baseURL}/`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static getDailyGlb(a) {
    const date = DateConvert.getDateData(a);
    return Axios.get(`${baseURL}/daily`)
      .then((res) => {
        let result = res.data.filter((obj) => {
          return obj.reportDate == date;
        });
        if (result.length < 1) {
          return this.getDailyGlb(a + 1);
        } else {
          return result.shift();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default DataSource;
