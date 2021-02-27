const { Report } = require("../models/report");
const { FindWitness } = require("../services/findWitness");
const fs = require("fs");

class SaveReport {
  constructor() {}
  async checkAndSaveReportInfo(title, phoneNumber, ipAddress) {
    try {
      const report = new Report();
      const fw = new FindWitness();
      report.title = title;
      report.fbiReport = await fw.getFBIInfo(title);
      report.phoneNumber = phoneNumber;
      report.isValidNumber = await fw.checkPhoneNumber(phoneNumber);
      report.country = await fw.checkGeoLocationFromPhone(phoneNumber);
      if (report.country == null) {
        report.country = await fw.checkGeoLocationFromIp(ipAddress);
      }
      await this.saveReportInFile(report);
      return report;
    } catch (error) {
      throw new Error(error);
    }
  }
  async saveReportInFile(report) {
    try {
      const repostPath = "reports.json";
      const reports = await this.checkIfFileExist(repostPath);
      reports.push(report);
      fs.writeFileSync(repostPath, JSON.stringify(reports));
    } catch (error) {
      throw new Error(error);
    }
  }
  async checkIfFileExist(fileName) {
    let value;
    try {
      value = fs.readFileSync(fileName);
      let jsonArray = JSON.parse(value);
      return jsonArray;
    } catch (error) {
      let array = new Array();
      value = fs.writeFileSync(fileName, JSON.stringify(array));
      return array;
    }
  }
}
module.exports = {
  SaveReport,
};
