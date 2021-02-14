const data = require('../data')
const resolver = {
    Query: {
        details: () => data
    },
    Mutation: {
        newEmployee: async (_, args) => {
            const { name, department, age, joinedYear } = args
            data.push({
                name,
                department,
                age,
                joinedYear
            })
            return { name, department, age, joinedYear }
        }
    }
}
module.exports =  resolver