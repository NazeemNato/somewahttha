const express = require('express')
const { gql,ApolloServer } =  require('apollo-server-express')
const cors = require('cors')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolver')

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())

const server = new ApolloServer({
    typeDefs,
    resolvers
})


app.get('/', (_, res) => {
    res.send('👋 Hello World')
})


server.applyMiddleware({app})

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`)
})