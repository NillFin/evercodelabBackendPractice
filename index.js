const logger = require("./logger");
const scheduleTask = require("./scheduler");

logger("Application started");

scheduleTask("heartbeat", 10000, () => {
  logger("running");
});