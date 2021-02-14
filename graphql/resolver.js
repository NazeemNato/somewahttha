const EmployeeData = require("../model/employee");
const resolver = {
  Query: {
    details: async () => {
      const data = await EmployeeData.find();
      return data;
    },
  },
  Mutation: {
    newEmployee: async (_, args) => {
      const { name, department, age, joinedYear } = args;
      const data = EmployeeData({
        name,
        department,
        age,
        joinedYear,
      });
      const save = await data.save();
      return save;
    },
  },
};
module.exports = resolver;
