import os from "node:os";
import worker from "node:worker_threads";

const performCalculations = async () => {
  const path = new URL("./worker.js", import.meta.url);
  const cpus = os.cpus();
  const workerData = cpus.map(
    (el, i) =>
      new Promise((resolve, reject) => {
        new worker.Worker(path, { workerData: 10 + i })
          .on("message", (message) => resolve(message))
          .on("error", (message) => reject(message));
      })
  );

  const result = await Promise.allSettled(workerData);

  console.log(
    result.map((el) => {
      return {
        status: el.status === "fulfilled" ? "resolved" : "error",
        data: el.status === "fulfilled" ? el.value : null,
      };
    })
  );
};

await performCalculations();
