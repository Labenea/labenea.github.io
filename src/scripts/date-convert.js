class DateConvert {
  static getDateData(a) {
    const today = new Date();
    const days = new Date(today);

    days.setDate(days.getDate() - a);

    const dd = (days.getDate() < 10 ? "0" : "") + days.getDate();
    const mm = (days.getMonth() < 10 ? "0" : "") + (days.getMonth() + 1);
    const yyyy = days.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
  static convertDate(d) {
    const date = new Date(d);
    return date.toDateString() + " " + date.toLocaleTimeString();
  }
}
export default DateConvert;
