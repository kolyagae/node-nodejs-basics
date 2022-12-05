import fs from "node:fs";

const read = async () => {
  const pathFile = new URL("./files/fileToRead.txt", import.meta.url);
  const reader = fs.createReadStream(pathFile);
  reader.pipe(process.stdout);
};

await read();
