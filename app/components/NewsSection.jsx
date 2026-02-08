"use client";

import NewsCard from "./NewsCard";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function NewsSection({ newsList }) {
    const { t } = useLanguage();

    return (
        <main className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        {t("trending_today")}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-400">
                        {t("trending_subtitle")}
                    </p>
                </div>
            </div>

            <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {newsList.map(news => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </section>
        </main>
    );
}