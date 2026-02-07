import { DownIcon, EyeIcon, UpIcon } from "@/app/components/SvgIcons/SvgIcons";
import { formatCount } from "@/lib/formatters";
import { getNews } from "@/lib/getNews";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailsPage({ params }) {
    const allNews = await getNews();
    const news = allNews.find(n => n.slug === params.slug);

    if (!news) {
        notFound();
    }

    const {
        id,
        title,
        description,
        author_name,
        author_avatar,
        published_date,
        upvotes,
        downvotes,
        views,
        thumbnail,
        tags,
    } = news;

    // sentence-e divide kora
    const sentences = description.split('. ').map(s => s.endsWith('.') ? s : s + '.');

    // headline (1st sentence)
    const headline = sentences[0];

    // baki sentence gulo ke duita bhage bhag kora
    const remainingSentences = sentences.slice(1);
    const midPoint = Math.ceil(remainingSentences.length / 2);

    const part1 = remainingSentences.slice(0, midPoint).join(' ');
    const part2 = remainingSentences.slice(midPoint).join(' ');

    return (
        <main className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                    href="/"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                    Back to home
                </Link>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                <article className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal">
                    <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                        <h3 className="text-3xl font-semibold text-white">
                            {title}
                        </h3>
                        <p className="mt-3 text-base text-zinc-300">
                            {headline}
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={`/assets/images/${author_avatar}`}
                                    alt={author_name}
                                    width={100}
                                    height={100}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                                <span className="text-sm font-medium text-white">{author_name}</span>
                            </div>
                            <span className="text-xs text-zinc-500">•</span>
                            <span>Published on {new Date(published_date).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })}</span>
                        </div>
                        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                            <Image
                                src={`/assets/images/${thumbnail}`}
                                alt={title}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
                            <p>
                                {part1}
                            </p>
                            <p>
                                {part2}
                            </p>
                        </div>
                    </div>
                </article>
                <aside className="space-y-6">
                    <div
                        className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                        style={{ animationDelay: "120ms" }}
                    >
                        <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                            <h4 className="text-sm font-semibold text-white">Engagement</h4>
                            <div className="mt-4 space-y-3 text-sm text-zinc-300">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <UpIcon />
                                        Upvotes
                                    </span>
                                    <span className="text-white">{formatCount(upvotes)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <DownIcon />
                                        Downvotes
                                    </span>
                                    <span className="text-white">{formatCount(downvotes)}</span>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-zinc-400">
                                <span className="flex items-center gap-2">
                                    <EyeIcon />
                                    Views
                                </span>
                                <span className="text-white">{formatCount(views)}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                            <h4 className="text-sm font-semibold text-white">Tags</h4>
                            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                                {tags?.map((tag, index) => (
                                    <span key={index} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                        style={{ animationDelay: "280ms" }}
                    >
                        <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)]">
                            <h4 className="text-sm font-semibold text-white">Author</h4>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="rounded-full bg-white/10 p-[2px]">
                                    <Image
                                        src={`/assets/images/${author_avatar}`}
                                        alt={author_name}
                                        width={100}
                                        height={100}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{author_name}</p>
                                    <p className="text-xs text-zinc-400">
                                        Research lead, Aurora Labs
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-zinc-400">
                                Published on {new Date(published_date).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
