import fs from "node:fs/promises";

const rename = async () => {
  const dirPath = new URL("./files", import.meta.url);
  const oldFileName = new URL("./files/wrongFilename.txt", import.meta.url);
  const newFileName = new URL("./files/properFilename.md", import.meta.url);
  const dir = await fs.readdir(dirPath);

  try {
    if (
      dir.includes("properFilename.md") ||
      !dir.includes("wrongFilename.txt")
    ) {
      throw new Error("FS operation failed");
    }

    await fs.rename(oldFileName, newFileName);
  } catch (err) {
    console.error(err.message);
  }
};

await rename();
