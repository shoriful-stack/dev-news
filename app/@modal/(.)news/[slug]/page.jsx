"use client";

import { useRouter } from "next/navigation";
import { getNews } from "@/lib/getNews";
import { useEffect, useState } from "react";
import NewsModal from "@/app/components/NewsModal";

export default function NewsModalPage({ params }) {
    const router = useRouter();
    const [news, setNews] = useState(null);

    useEffect(() => {
        async function load() {
            const allNews = await getNews();
            const found = allNews.find(n => n.slug === params.slug);
            if (!found) {
                router.replace("/");
                return;
            }
            setNews(found);
        }
        load();
    }, [params.slug, router]);

    if (!news) return null;

    return <NewsModal news={news} />;
}
