const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('dotenv').config();
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
      for (let i = 1; i < 42; i++) {
        config.env[`user_${i}`] = process.env[`USERNAME_${i}`];
        config.env[`pas_${i}`] = process.env[`PASSWORD_${i}`];
      }
      return config;
    },
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
