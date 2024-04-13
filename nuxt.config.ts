// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  modules: [
    "@nuxt/ui"
  ]
})
