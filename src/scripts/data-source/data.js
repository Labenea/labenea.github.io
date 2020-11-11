import Axios from "axios";

const baseURL = "https://covid.mathdro.id/api";

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
}

export default DataSource;
