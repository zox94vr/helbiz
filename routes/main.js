const express = require("express");
const router = express.Router();
const { SaveReport } = require("../services/saveReport");
router.post("/", async (req, res) => {
  try {
    const sr = new SaveReport();
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const savedReport = await sr.checkAndSaveReportInfo(
      req.body.title,
      req.body.phoneNumber,
      ip
    );
    res.status(200).send({
      savedReport: savedReport,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
});

module.exports = router;
