// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxthub/core'],
  content: {
    build: {
      markdown: {
        // Object syntax can be used to override default options
        remarkPlugins: {
          // Override remark-emoji options
          'remark-emoji': {
            options: {
              emoticon: true
            }
          }
        },
      }
    },
    experimental: { sqliteConnector: 'native' },
  },
  hub:{
    
  }
})