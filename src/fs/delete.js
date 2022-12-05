import fs, { constants } from "node:fs/promises";

const remove = async () => {
  const pathFile = new URL("./files/fileToRemove.txt", import.meta.url);

  try {
    await fs.access(pathFile, constants.F_OK).catch(() => {
      throw new Error("FS operation failed");
    });
    await fs.rm(pathFile);
  } catch (err) {
    console.error(err.message);
  }
};

await remove();
