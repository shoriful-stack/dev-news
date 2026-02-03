import { getAllNews, getNewsBySlug, saveNews } from "@/lib/news"

export function GET(req, { params }) {
    const news = getNewsBySlug(params.slug);

    if (!news) {
        return Response.json(
            { "message": "News not found" },
            { status: 404 });
    }
    return Response.json(news);
}

export async function PATCH(req, { params }) {
    const body = await req.json();
    const allowedFields = ["title", "description"];

    const invalidField = Object.keys(body).find(
        key => !allowedFields.includes(key)
    );

    if (invalidField) {
        return Response.json(
            { error: `You can only update title or description` },
            { status: 400 }
        );
    }

    const news = getAllNews();
    const index = news.findIndex(n => n.slug === params.slug);

    if (index === -1) {
        return Response.json(
            { message: "News not found" },
            { status: 404 }
        );
    }

    news[index] = { ...news[index], ...body };
    saveNews(news);

    return Response.json(news[index]);
}
