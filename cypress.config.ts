// ***********************************************************
// https://on.cypress.io/plugins-guide
// ***********************************************************
import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";

export default defineConfig({
  viewportWidth: 1400,
  viewportHeight: 1000,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 1,
  video: true,
  projectId: "NS6oM9",
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
