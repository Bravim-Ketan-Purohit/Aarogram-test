const express = require("express");
const generateReport = require("../controller/user-controller");
const router = express.Router();

router.post("/add", () => generateReport);

module.exports = generateReport;