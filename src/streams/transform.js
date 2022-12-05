import stream from "node:stream";

const transform = async () => {
  const reverseData = new stream.Transform({
    transform(chunk, _, cb) {
      cb(null, chunk.toString().trim().split("").reverse().join("") + "\n");
    },
  });

  process.stdin.pipe(reverseData).pipe(process.stdout);
};

await transform();
