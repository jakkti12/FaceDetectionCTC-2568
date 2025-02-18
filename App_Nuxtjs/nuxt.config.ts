import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';
import fs from 'fs'
dotenv.config();

let httpsOptions = {};
try {
  httpsOptions = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
  };
} catch (error) {
  console.warn('⚠️ ไม่พบไฟล์ SSL, รัน HTTP แทน');
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:7000',
    },
  },

  devServer: {
    // https: httpsOptions
    port: 3000
  },

  server: {
    host: '203.113.123.194',
    port: 3333,
  },
  
  devtools: { enabled: true },
  
  // เพิ่มโมดูล Apollo และ Vuetify
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  // การตั้งค่า Vite สำหรับ Vuetify
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  // การตั้งค่า CSS
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/custom.css',
    '~/assets/icons/bootstrap-icons.css',
  ],

  // การตั้งค่า Plugins
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' },
    { src: '~/plugins/auth.ts', mode: 'client' },
  ],
  // การตั้งค่า Transpile
  build: {
    transpile: ['vuetify'],
  },
});

