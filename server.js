const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.get("/", (_, res) => {
  res.send("👋 Hello World");
});

server.applyMiddleware({ app });
mongoose.connect(
  "mongodb://localhost:27017/employee",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("😃 DB connected!");
  }
);
app.listen(PORT, () => {
  console.log(
    `🚀 Server running at http://localhost:${PORT}\n🌟 GraphQl running at http://localhost:${PORT}${server.graphqlPath}`
  );
});
