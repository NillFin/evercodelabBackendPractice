console.log("scheduler.js initialized");

function scheduleTask(name, interval, task) {
  console.log(`Task "${name}" scheduled every ${interval} ms`);

  setInterval(() => {
    task();
  }, interval);
}

module.exports = scheduleTask;