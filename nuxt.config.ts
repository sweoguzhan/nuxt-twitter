import { defineNuxtConfig } from 'nuxt/config';
import vuetify from 'vuetify';

export default defineNuxtConfig({
  css: ['vuetify/styles', '@/assets/css/global.css','@mdi/font/css/materialdesignicons.min.css'],

  pages:true,

  build: {
    transpile: ['vuetify'],

  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@pinia/nuxt'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  runtimeConfig: {
    public: {
      rapidApiKey: process.env.RAPIDAPI_KEY,
      rapidApiHost: process.env.RAPIDAPI_HOST,
    },
  },

  compatibilityDate: '2024-09-27',
});
