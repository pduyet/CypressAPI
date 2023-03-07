import { defineConfig } from "cypress";

export default defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshots",
  video: false,
  videosFolder: "cypress/videos",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "API-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embededScreenshots: true,
    overwrite: true,
    html: false,
    json: true,
  },
  env: {
    type: "dev" || "staging",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
