const {
  defineConfig
} = require("cypress");
module.exports = defineConfig({
  projectId: "jdpoor",
  e2e: {
    setupNodeEvents(on, config) {},
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://buger-eats.vercel.app", 
  },
});
