// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  nitro: {
    imports: {
      dirs: ['./server/services']
    }
  },

  css: ['~/assets/css/index.css'],

  image: {
    provider: 'ipx'
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/image',
    '@vueuse/nuxt'
  ]
})
