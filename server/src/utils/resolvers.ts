import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, __, {dataSources}) => (dataSources.trackAPI.getTracksForHome())
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => (dataSources.trackAPI.getAuthor(authorId))
  }
}