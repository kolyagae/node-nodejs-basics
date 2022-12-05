import worker from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const fib = nthFibonacci(worker.workerData);
  worker.parentPort.postMessage(fib);
};

sendResult();
