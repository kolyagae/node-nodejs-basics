import { createHash } from "node:crypto";
import fs from "node:fs/promises";

const calculateHash = async () => {
  try {
    const pathFile = new URL(
      "./files/fileToCalculateHashFor.txt",
      import.meta.url
    );
    const text = await fs.readFile(pathFile).catch(() => {
      throw new Error("FS operation failed");
    });
    const result = createHash("sha256").update(text).digest("hex");
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};

await calculateHash();
