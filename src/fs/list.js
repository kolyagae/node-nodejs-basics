import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  const dirPath = new URL("./files", import.meta.url);

  try {
    const files = await fs.readdir(dirPath).catch(() => {
      throw new Error("FS operation failed");
    });
    console.log(files.filter((file) => path.extname(file) !== ""));
  } catch (err) {
    console.error(err.message);
  }
};

await list();
