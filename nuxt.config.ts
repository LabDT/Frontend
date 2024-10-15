import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-10-15",

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/sass/_colors.sass" as *\n@use "~/assets/sass/_fonts.sass" as *\n@use "~/assets/sass/_mixins.sass" as *\n'
        }
      }
    }
  },

  app: {
    head: {
      link: [
        // Google fonts preconnect
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        // Google fonts preconnect
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      ]
    }
  },

  modules: process.env.HISTOIRE ? [] : ['@nuxtjs/i18n'],

  // @ts-ignore
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'pt', name: 'Português', iso: 'pt-BR', file: 'pt.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    strategy: 'no_prefix',
  }
})