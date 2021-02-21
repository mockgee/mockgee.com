
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s - ' + 'Mockgee',
    title: 'Mockgee - Create Mock APIs in seconds',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mockgee is a Nodejs based APIs mocking server that also provides a user interface for working with mock APIs. It is designed to provide consumable APIs available to developers even before actual APIs are ready. Mockgee lets you create a replica of your target API with 100% technical capability. Create multiple combinations of request-response for an API resource.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@assets/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
 buildModules: [
  '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxt/content'
  ],
  axios: {
    // proxyHeaders: false
  },
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LdR57wZAAAAAME_cM_MlkYelB_5ZZAh6EGgWz6b', // Site key for requests
    version: 2, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  googleAnalytics: {
    id: 'UA-190268652-1'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
