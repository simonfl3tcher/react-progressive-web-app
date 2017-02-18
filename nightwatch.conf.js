const SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar',
  host: '127.0.0.1',
  port: 4444,
};

const CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true,
};

const DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost:2000',
  selenium_port: 4444,
  selenium_host: 'localhost',
  silent: true,
  desiredCapabilities: CHROME_CONFIGURATION,
};

const ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION,
};

module.exports = {
  src_folders: ['test/specs/e2e'],
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS,
};
