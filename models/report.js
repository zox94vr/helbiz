class Report {
  constructor() {}
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }
  get isValidNumber() {
    return this._isValidNumber;
  }
  set isValidNumber(isValidNumber) {
    this._isValidNumber = isValidNumber;
  }
  get fbiReport() {
    return this._fbiReport;
  }
  set fbiReport(fbiReport) {
    this._fbiReport = fbiReport;
  }
  get country() {
    return this._country;
  }
  set country(country) {
    this._country = country;
  }
}
module.exports = {
  Report,
};
