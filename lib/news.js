import path from "path";
import fs from "fs";

const dataPath = path.join(process.cwd(), "public/data.json");

export function getAllNews() {
    const file = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(file);
}