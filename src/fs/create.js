import fs, { constants } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathDir = `${__dirname}/files/`;
  const newFile = "fresh.txt";
  const pathFile = `${pathDir}${newFile}`;
  const files = await fs.readdir(pathDir);

  try {
    if (files.includes(newFile)) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(`${pathFile}`, "I am fresh and young");
    console.log("File created successfully!");
  } catch (err) {
    console.error(err);
  }
};

await create();
