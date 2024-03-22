import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://api-ap-southeast-2.hygraph.com/v2/cltskxtrh00s608unqwi7qt14/master",
  documents: ["**/*.vue"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
