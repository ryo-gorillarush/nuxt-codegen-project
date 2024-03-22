export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie("hygraph");

  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = cookie.value ?? "";
  });
});
