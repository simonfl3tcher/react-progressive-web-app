/* eslint max-len: 0 */

const SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.1.0.jar',
  host: '127.0.0.1',
  port: 4444,
};

const CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true,
  chromeOptions: {
    args: ['--no-sandbox'],
  },
};

const DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost:2000/',
  selenium_port: 4444,
  selenium_host: 'localhost',
  silent: true,
  desiredCapabilities: CHROME_CONFIGURATION,
};

const ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION,
};

module.exports = {
  src_folders: 'test/specs/e2e',
  output_folder: 'test/specs/e2e/tests_output',
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS,
};
