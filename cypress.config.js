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
      config.env.user_1 = process.env.USERNAME_1;
      config.env.pas_1 = process.env.PASSWORD_1;
      config.env.user_2 = process.env.USERNAME_2;
      config.env.pas_2 = process.env.PASSWORD_2;
      config.env.user_3 = process.env.USERNAME_3;
      config.env.pas_3 = process.env.PASSWORD_3;
      config.env.user_4 = process.env.USERNAME_4;
      config.env.pas_4 = process.env.PASSWORD_4;
      config.env.user_5 = process.env.USERNAME_5;
      config.env.pas_5 = process.env.PASSWORD_5;
      config.env.user_6 = process.env.USERNAME_6;
      config.env.pas_6 = process.env.PASSWORD_6;
      config.env.user_7 = process.env.USERNAME_7;
      config.env.pas_7 = process.env.PASSWORD_7;
      config.env.user_8 = process.env.USERNAME_8;
      config.env.pas_8 = process.env.PASSWORD_8;
      config.env.user_9 = process.env.USERNAME_9;
      config.env.pas_9 = process.env.PASSWORD_9;
      config.env.user_10 = process.env.USERNAME_10;
      config.env.pas_10 = process.env.PASSWORD_10;
      config.env.user_11 = process.env.USERNAME_11;
      config.env.pas_11 = process.env.PASSWORD_11;
      config.env.user_12 = process.env.USERNAME_12;
      config.env.pas_12 = process.env.PASSWORD_12;
      config.env.user_13 = process.env.USERNAME_13;
      config.env.pas_13 = process.env.PASSWORD_13;
      config.env.user_14 = process.env.USERNAME_14;
      config.env.pas_14 = process.env.PASSWORD_14;
      config.env.user_15 = process.env.USERNAME_15;
      config.env.pas_15 = process.env.PASSWORD_15;
      config.env.user_16 = process.env.USERNAME_16;
      config.env.pas_16 = process.env.PASSWORD_16;
      config.env.user_17 = process.env.USERNAME_17;
      config.env.pas_17 = process.env.PASSWORD_17;
      config.env.user_18 = process.env.USERNAME_18;
      config.env.pas_18 = process.env.PASSWORD_18;
      config.env.user_19 = process.env.USERNAME_19;
      config.env.pas_19 = process.env.PASSWORD_19;
      config.env.user_20 = process.env.USERNAME_20;
      config.env.pas_20 = process.env.PASSWORD_20;
      config.env.user_21 = process.env.USERNAME_21;
      config.env.pas_21 = process.env.PASSWORD_21;
      config.env.user_22 = process.env.USERNAME_22;
      config.env.pas_22 = process.env.PASSWORD_22;
      config.env.user_23 = process.env.USERNAME_23;
      config.env.pas_23 = process.env.PASSWORD_23;
      config.env.user_24 = process.env.USERNAME_24;
      config.env.pas_24 = process.env.PASSWORD_24;
      config.env.user_25 = process.env.USERNAME_25;
      config.env.pas_25 = process.env.PASSWORD_25;
      config.env.user_26 = process.env.USERNAME_26;
      config.env.pas_26 = process.env.PASSWORD_26;
      config.env.user_27 = process.env.USERNAME_27;
      config.env.pas_27 = process.env.PASSWORD_27;
      config.env.user_28 = process.env.USERNAME_28;
      config.env.pas_28 = process.env.PASSWORD_28;
      config.env.user_29 = process.env.USERNAME_29;
      config.env.pas_29 = process.env.PASSWORD_29;
      config.env.user_30 = process.env.USERNAME_30;
      config.env.pas_30 = process.env.PASSWORD_30;
      config.env.user_31 = process.env.USERNAME_31;
      config.env.pas_31 = process.env.PASSWORD_31;
      config.env.user_32 = process.env.USERNAME_32;
      config.env.pas_32 = process.env.PASSWORD_32;
      config.env.user_33 = process.env.USERNAME_33;
      config.env.pas_33 = process.env.PASSWORD_33;
      config.env.user_34 = process.env.USERNAME_34;
      config.env.pas_34 = process.env.PASSWORD_34;
      config.env.user_35 = process.env.USERNAME_35;
      config.env.pas_35 = process.env.PASSWORD_35;
      config.env.user_36 = process.env.USERNAME_36;
      config.env.pas_36 = process.env.PASSWORD_36;
      config.env.user_37 = process.env.USERNAME_37;
      config.env.pas_37 = process.env.PASSWORD_37;
      config.env.user_38 = process.env.USERNAME_38;
      config.env.pas_38 = process.env.PASSWORD_38;
      config.env.user_39 = process.env.USERNAME_39;
      config.env.pas_39 = process.env.PASSWORD_39;
      config.env.user_40 = process.env.USERNAME_40;
      config.env.pas_40 = process.env.PASSWORD_40;
      config.env.user_41 = process.env.USERNAME_41;
      config.env.pas_41 = process.env.PASSWORD_41;
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
