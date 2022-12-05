import fs from "node:fs";

const write = async () => {
  const filePath = new URL("./files/fileToWrite.txt", import.meta.url);
  const writer = fs.createWriteStream(filePath);
  process.stdin.pipe(writer);
  // Write your code here
};

await write();
