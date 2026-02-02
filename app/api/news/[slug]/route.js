import { getNewsBySlug } from "@/lib/news"

export function GET(req, { params }) {
    const news = getNewsBySlug(params.slug);

    if (!news) {
        return Response.json(
            { "message": "News not found" },
            { status: 404 });
    }
    return Response.json(news);
}