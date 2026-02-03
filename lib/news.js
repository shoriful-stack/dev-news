import path from "path";
import fs from "fs";

const dataPath = path.join(process.cwd(), "public/data.json");

export function getAllNews() {
    const file = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(file);
}

export function getNewsBySlug(slug) {
    const news = getAllNews();
    return news.find(n => n.slug === slug);
}

export function saveNews(updatedNews) {
    fs.writeFileSync(dataPath, JSON.stringify(updatedNews, null, 2));
}