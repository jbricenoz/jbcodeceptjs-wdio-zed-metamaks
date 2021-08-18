const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://goerli-test.zed.run/home',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      smartWait: 5000,
      windowSize: "maximize",
      timeouts: {
         "script": 60000,
         "page load": 10000
      },
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'jbcodeceptjs-wdio-zed-metamaks',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}