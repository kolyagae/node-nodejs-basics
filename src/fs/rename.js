import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = `${__dirname}\\files`;
  const oldFileName = `${dirPath}\\wrongFilename.txt`;
  const newFileName = `${dirPath}\\properFilename.md`;

  try {
    await fs.rename(`${oldFileName}`, `${newFileName}`);
    console.log("File renamed successfully!");
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
