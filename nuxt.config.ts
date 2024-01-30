// INFO: https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],

  modules: ["@pinia/nuxt"],

  // INFO: https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    public: {
      apiBase: "https://api.dekamarkt.nl/v1/assortmentcache/group/281/104",
      apiSecret: "6d3a42a3-6d93-4f98-838d-bcc0ab2307fd",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            "@use '~/assets/scss/_colors.scss' as Colors; @use '~/assets/scss/_elevation.scss' as Elevation; @use '~/assets/scss/_zIndex.scss' as *; ",
        },
      },
    },
  },
});
