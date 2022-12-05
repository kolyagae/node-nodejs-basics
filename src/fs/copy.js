import fs from "node:fs/promises";

const copy = async () => {
  const currDirPath = import.meta.url;
  const dirPath = new URL("./files", currDirPath);
  const dirCopyPath = new URL("./files_copy", currDirPath);

  try {
    await fs
      .cp(dirPath, dirCopyPath, {
        recursive: true,
        errorOnExist: true,
        force: false,
      })
      .catch(() => {
        throw new Error("FS operation failed");
      });
  } catch (err) {
    console.error(err.message);
  }
};

copy();
