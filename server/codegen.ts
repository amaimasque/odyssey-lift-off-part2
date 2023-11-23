import type {CodegenConfig} from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./src/utils/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./src/utils/context.ts#DataSourceContext",
        mappers: {
          Track: "./src/models.ts#TrackModel",
          Author: "./src/models.ts#AuthorModel"
        }
      }
    }
  },
}

export default config;