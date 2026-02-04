export async function getNews() {
    const data = await import("../public/data.json");
    return data.default;
}