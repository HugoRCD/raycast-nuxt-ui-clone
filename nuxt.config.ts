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
    },
    prerender: {
      routes: ['/']
    }
  },

  css: ['~/assets/css/index.css'],

  $development: {
    image: {
      provider: 'ipx'
    }
  },

  $production: {
    image: {
      provider: 'vercel'
    }
  },

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast']
      }
    ]
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/image',
    '@vueuse/nuxt'
  ]
})
