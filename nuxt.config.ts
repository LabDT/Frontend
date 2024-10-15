import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-10-15",
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/sass/_colors.sass" as *\n@use "~/assets/sass/_fonts.sass" as *\n'
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
  }
})