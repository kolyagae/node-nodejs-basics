import fs from "node:fs/promises";

const read = async () => {
  const filePath = new URL("./files/fileToRead.txt", import.meta.url);

  try {
    const fileText = await fs
      .readFile(filePath, { encoding: "utf-8" })
      .catch(() => {
        throw new Error("FS operation failed");
      });
    console.log(fileText);
  } catch (err) {
    console.error(err.message);
  }
};

await read();
