import childProcess from "node:child_process";

const spawnChildProcess = async (args) => {
  const path = new URL("./files/script.js", import.meta.url);
  childProcess.fork(path, args);
};

spawnChildProcess([1, 2, 3]);
