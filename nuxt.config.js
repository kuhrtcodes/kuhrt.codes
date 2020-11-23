export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Kuhrt.Codes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      // Favicons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      // Stylesheets
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&family=Roboto&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/main.scss'],

  // Styles used in components
  styleResources: {
    scss: [
      '@/assets/styles/global/_mixins.scss',
      '@/assets/styles/global/_variables.scss',
    ],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/composition-api'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/auth', '@nuxtjs/axios', '@nuxtjs/style-resources'],

  // Authentication options
  auth: {
    plugins: ['~/plugins/appmetadata.ts'],
    redirect: {
      login: '/',
      callback: '/success',
      home: '/dashboard',
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'kuhrtcodes.us.auth0.com',
        client_id: process.env.AUTH0_APP_CLIENT_SECRET,
        audience: 'https://kuhrtcodes.us.auth0.com/api/v2/',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Router settings
  router: {
    middleware: ['auth'],
  },

  // Global middleware
  middleware: [],

  // Server middleware
  serverMiddleware: ['~/api/management'],

  // Google Analytics settings
  googleAnalytics: {
    id: 'UA-114652432-1',
  },
};
