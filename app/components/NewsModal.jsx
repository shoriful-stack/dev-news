"use client";

import { useRouter } from "next/navigation";
import { formatCount, formatDate } from "@/lib/formatters";
import Image from "next/image";

export default function NewsModal({ news }) {
    const router = useRouter();

    const closeModal = () => {
        router.back();
    };

    return (
        <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0b0f19] p-6"
            >
                <button
                    onClick={closeModal}
                    className="sticky top-0 ml-auto block rounded-full bg-black/60 px-3 py-1 text-zinc-300 hover:text-white"
                >
                    ✕
                </button>

                <Image
                    src={`/assets/images/${news.thumbnail}`}
                    alt={news.title}
                    width={1200}
                    height={600}
                    className="mb-4 h-64 w-full rounded-lg object-cover"
                />

                <h2 className="text-2xl font-bold text-white">
                    {news.title}
                </h2>

                <p className="mt-3 text-zinc-400 leading-relaxed">
                    {news.description}
                </p>

                <div className="mt-6 flex justify-between text-sm text-zinc-400">
                    <span>{formatDate(news.published_date)}</span>
                    <span>{formatCount(news.views)} views</span>
                </div>
            </div>
        </div>
    );
}
