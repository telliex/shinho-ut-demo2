require('babel-register')
require('nightwatch-cucumber')({
  // cucumber 参数
  cucumberArgs: [
    '--require',
    'test/e2e/features/step_definitions',
    '--format',
    'node_modules/cucumber-pretty',
    '--format',
    'json:test/e2e/reports/cucumber.json',
    'test/e2e/features'
  ]
})
const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver') // chrome
const geckodriver = require('geckodriver') // firefox
const config = require('../../config') // http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/features/step_definitions'],
  output_folder: 'test/e2e/reports',
  // 加入 龙雨溪的扩展 API
  custom_commands_path: ['./node_modules/nightwatch-helpers/commands'],
  custom_assertions_path: ['./node_modules/nightwatch-helpers/assertions'],
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path
        }
      }
    }
  }
}
