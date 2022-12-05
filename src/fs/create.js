import fs from "node:fs/promises";

const create = async () => {
  const newFilePath = new URL("./files/fresh.txt", import.meta.url);
  const dirPath = new URL("./files", import.meta.url);
  const dir = await fs.readdir(dirPath);

  try {
    if (dir.includes("fresh.txt")) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(newFilePath, "I am fresh and young");
  } catch (err) {
    console.error(err.message);
  }
};

await create();
