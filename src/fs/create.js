import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const create = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filesDir = `${__dirname}/files/`;
    const newFile = "fresh.txt";
    const files = await fs.readdir(filesDir);

    if (files.includes(newFile)) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(`${filesDir}${newFile}`, "I am fresh and young");
  } catch (err) {
    console.error(err.message);
  }
};

await create();
