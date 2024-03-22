export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxt/ui"],
  devtools: { enabled: true },
  apollo: {
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: process.env.GRAPH_URL ?? "",
        authType: "Bearer",
        authHeader: "Authorization",
        tokenStorage: "cookie",
        tokenName: "hygraph",
      },
    },
  },
});
