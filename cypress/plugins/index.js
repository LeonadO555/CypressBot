/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
require('dotenv').config();

module.exports = function (on, config) {
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

  return config;
};
