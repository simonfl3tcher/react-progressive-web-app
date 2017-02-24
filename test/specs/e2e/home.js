module.exports = {
  'Home': (client) => {
    // Steps to execute
    client.url(client.launchUrl)
      .assert.containsText('.App-intro', 'Welcome to React PWA');

    client.end();
  },
};
