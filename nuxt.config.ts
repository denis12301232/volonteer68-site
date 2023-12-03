// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   app: {
      head: {
         script: [{ src: '//static.liqpay.ua/libjs/checkout.js', async: true }],
      },
   },
   devtools: { enabled: true },
   css: ['assets/styles/index.scss'],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   modules: ['@nuxtjs/i18n', '@nuxt/image', 'nuxt-primevue'],
   runtimeConfig: {
      public: {
         TELEGRAM: process.env.TELEGRAM,
         INSTAGRAM: process.env.INSTAGRAM,
         PHONE_HOT_LINE: process.env.PHONE_HOT_LINE,
         PHONE_INVO_TAXI: process.env.PHONE_INVO_TAXI,
         PHONE_EVACUATION: process.env.PHONE_EVACUATION,
         EMAIL: process.env.EMAIL,
         PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
         LIQPAY_PUBLIC_KEY: process.env.LIQPAY_PUBLIC_KEY,
      },
      private: {
         PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
         LIQPAY_PRIVATE_KEY: process.env.LIQPAY_PRIVATE_KEY,
      },
   },
   i18n: {
      vueI18n: './i18n/i18n.config.ts',
      locales: [
         {
            code: 'en',
            file: 'en.json',
         },
         {
            code: 'uk',
            file: 'uk.json',
         },
      ],
      lazy: true,
      langDir: './i18n/locales',
      defaultLocale: 'uk',
      strategy: 'prefix',
      detectBrowserLanguage: false,
      compilation: {
         strictMessage: false,
      },
   },
   primevue: {
      usePrimeVue: true,
      options: {
         unstyled: true,
         ripple: true,
      },
      importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
   },
   devServer: {
      host: '0.0.0.0',
      port: 3000,
   },
});
