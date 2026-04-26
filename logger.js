const config = require("./config");

function logger(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${config.appName}] ${message}`);
}

module.exports = logger;