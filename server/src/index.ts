import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./utils/schema";
import { resolvers } from "./utils/resolvers";
import { TrackAPI } from "./datasources/track-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => ({
      dataSources: {
        trackAPI: new TrackAPI({ cache: server.cache })
      }
    })
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
