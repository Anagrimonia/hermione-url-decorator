const URI = require('urijs');

module.exports = (hermione, options) => {
  hermione.on(hermione.events.NEW_BROWSER, (browser) => {
    browser.overwriteCommand('url', (origUrlFn, uri) => {
      uri = uri ? new URI(uri).addQuery(options.query).toString() : uri;

      return origUrlFn(uri);
    });
  });
};
