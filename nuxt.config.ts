export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/projects': { prerender: true },
    '/contact': { prerender: true },
    '/weather': { prerender: true },
    '/facts': { prerender: true },
  }
})