exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: "local",
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: ["../features/**/*.feature"],
  // Patterns to exclude.
  exclude: [],
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 2,
  capabilities: [
    // CHROME (headless)
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless=new", "--disable-gpu", "--window-size=1920,1080"],
      },
      maxInstances: 2,
    },
    // FIREFOX (headless)
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
      maxInstances: 2,
    },
    // SAFARI (macOS only - does not work on Windows)
    {
      browserName: "safari",
      maxInstances: 1,
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost:8080",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  //
  // Framework you want to run your specs with.
  framework: "cucumber",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  specFileRetries: 2,
  specFileRetriesDelay: 0,
  specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  reporters: ["spec"],
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: ["../step-definitions/steps.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};

