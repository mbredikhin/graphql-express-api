const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/schema.js");

const port = 3000;
const app = express();
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port);
console.log('Server runnin on ' + port);
