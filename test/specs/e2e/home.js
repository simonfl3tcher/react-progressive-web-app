module.exports = {
  'Home': (client) => {
    // Steps to execute
    client.url('http://localhost:2000/')
      .assert.containsText('.App-intro', 'Welcome to React PWA');

    client.end();
  },
};
