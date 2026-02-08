import { formatCount, formatDate } from "@/lib/formatters";
import { DownIcon, EyeIcon, UpIcon } from "./SvgIcons/SvgIcons";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../providers/LanguageProvider";

export default function NewsCard({ news }) {
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
    const { t } = useLanguage();
    return (
        <>
            <Link href={`/news/${news.slug}`} scroll={false}>
                <div
                    className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                    style={{ animationDelay: "0ms" }}
                >
                    <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
                        <div className="aspect-video overflow-hidden rounded-xl">
                            <Image
                                src={`/assets/images/${thumbnail}`}
                                alt={title}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={`/assets/images/${author_avatar}`}
                                    alt={author_name}
                                    width={100}
                                    height={100}
                                    className="h-7 w-7 rounded-full object-cover"
                                />
                                <span>{author_name}</span>
                            </div>
                            <span>{formatDate(published_date)}</span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-white">
                            {title}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                            {tags.map((tag, index) => (
                                <span key={index} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                    <UpIcon />
                                    {formatCount(upvotes)}
                                </span>
                                <span className="flex items-center gap-1">
                                    <DownIcon />
                                    {formatCount(downvotes)}
                                </span>
                            </div>
                            <span className="flex items-center gap-1">
                                <EyeIcon />
                                {formatCount(views)} {t("views")}
                            </span>
                        </div>
                    </article>
                </div>
            </Link>
        </>
    );
}