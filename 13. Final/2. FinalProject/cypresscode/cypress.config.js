const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://saucedemo.com http://saucelabs.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
