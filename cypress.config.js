const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    waitForAnimations: true,
    viewportWidth: 1400,
    viewportHeight: 800,
    pageLoadTimeout: 140000,
    taskTimeout: 30000,
    redirectionLimit: 50,
    defaultCommandTimeout: 30000,
    screenshotOnRunFailure: false,
    video: false,
    retries: { runMode: 0, openMode: 0 },
  },
});
