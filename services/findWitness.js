const axios = require("axios");
const { parsePhoneNumber, isValidPhoneNumber } = require("libphonenumber-js");
var geoip = require("geoip-lite");

class FindWitness {
  constructor() {}
  async getFBIInfo(title) {
    try {
      const resposne = await axios.get("https://api.fbi.gov/wanted/v1/list", {
        params: {
          title: title,
        },
      });
      console.log(resposne);
      return resposne.data.items.length > 0 ? true : false;
    } catch (error) {
      throw new Error(error);
    }
  }
  async checkPhoneNumber(number) {
    try {
      return isValidPhoneNumber(number) ? true : false;
    } catch (error) {
      throw new Error(error);
    }
  }
  async checkGeoLocationFromPhone(number) {
    try {
      const parsedPhoneNumber = parsePhoneNumber(number);
      return parsedPhoneNumber ? parsedPhoneNumber.country : null;
    } catch (error) {
      throw new Error(error);
    }
  }
  async checkGeoLocationFromIp(ipAddress) {
    try {
      const geo = geoip.lookup(ipAddress);
      return geo ? geo.country : null;
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = {
  FindWitness,
};
