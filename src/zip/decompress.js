import zlib from "node:zlib";
import stream from "node:stream";
import fs from "node:fs";

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const sourcePath = new URL("./files/archive.gz", import.meta.url);
  const destinationPath = new URL(
    "./files/fileToCompress.txt",
    import.meta.url
  );
  sourcePath;
  const source = fs.createReadStream(sourcePath);
  const destination = fs.createWriteStream(destinationPath);

  stream.pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
