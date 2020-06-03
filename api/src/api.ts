import { GraphQLServer } from "graphql-yoga"

import resolvers from "./resolvers/resolvers"

const options: Object = {
  port: 4444
}

const gqlServer = new GraphQLServer({
  typeDefs: "./src/schema/schema.graphql",
  resolvers
})

gqlServer
  .start(options, () => console.log(`Server running on localhost:${options["port"]} 🚀`))
  .catch(err => console.error(`Error on connect server on port${options["port"]} \nError:${err}`))