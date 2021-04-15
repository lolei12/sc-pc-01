export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sc-pc-01',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/element-ui.js',mode:'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  
  baseURL:'http://127.0.0.1:7300/mock/60482825fe9fc0025488a5cc/sxds',//接口的URL---zuul接口的地址
  // baseURL:'http://localhost:9000/v1'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    vendor:['element-ui']//防止elementUI被打包多次
  }
}
