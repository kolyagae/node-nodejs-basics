import fs from "node:fs/promises";

const list = async () => {
  const dirPath = new URL("./files", import.meta.url);

  try {
    const files = await fs.readdir(dirPath).catch(() => {
      throw new Error("FS operation failed");
    });
    console.log(files.filter((file) => file.split(".").length > 1));
  } catch (err) {
    console.error(err.message);
  }
};

await list();
