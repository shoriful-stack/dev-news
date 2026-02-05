"use client";

import { useRouter } from "next/navigation";
import { formatCount, formatDate } from "@/lib/formatters";

export default function NewsModal({ news }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative w-full max-w-3xl rounded-xl bg-[#0b0f19] p-6">

                <button
                    onClick={() => router.back()}
                    className="absolute right-4 top-4 text-zinc-400 hover:text-white"
                >
                    ✕
                </button>

                <img
                    src={`/assets/images/${news.thumbnail}`}
                    className="mb-4 h-64 w-full rounded-lg object-cover"
                />

                <h2 className="text-2xl font-bold text-white">
                    {news.title}
                </h2>

                <p className="mt-2 text-zinc-400">
                    {news.description}
                </p>

                <div className="mt-4 flex justify-between text-sm text-zinc-400">
                    <span>{formatDate(news.published_date)}</span>
                    <span>{formatCount(news.views)} views</span>
                </div>
            </div>
        </div>
    );
}
