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
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('before:browser:launch', (browser = {}, launchOptions) => {

    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.preferences.default["settings.language.preferred_languages"] = "de-AT"
      launchOptions.preferences.default["intl.initial_locale"] = "de-AT"
      // Whatever this is...
      launchOptions.preferences.localState["variations_safe_seed_locale"] = "de-AT"
    }
    
    return launchOptions
  });
};
