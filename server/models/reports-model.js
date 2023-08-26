const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment')

const reportsData = mongoose.Schema({
  name: { type: String, required: true },
  reportname: { type: String, required: true },
  rbc: { type: Number, required: true },
  hemoglobin: { type: Number, required: true },
  wbc: { type: Number, required: true },
});

autoIncrement.initialize(mongoose.connection);
reportsData.plugin(autoIncrement.plugin,'reports')

const reports = mongoose.model("reports",reportsData)

module.exports = reports;
