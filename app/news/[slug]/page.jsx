import { getNews } from "@/lib/getNews";
import { notFound } from "next/navigation";

export default async function NewsDetailsPage({ params }) {
    const allNews = await getNews();
    const news = allNews.find(n => n.slug === params.slug);

    if (!news) {
        notFound();
    }

    return (
        <div>
            <h1>{news.title}</h1>
        </div>
    );
}
