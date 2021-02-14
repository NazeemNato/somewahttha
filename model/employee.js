const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  joinedYear: {
    type: Number,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("EmployeeData", EmployeeSchema);
