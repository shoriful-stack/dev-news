import { DownIcon, EyeIcon, UpIcon } from "./SvgIcons/SvgIcons";

export default function NewsCard() {
    return (
        <>
            <div
                className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                style={{ animationDelay: "0ms" }}
            >
                <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="aspect-video overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                            alt="Circuit board"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=64&h=64&q=80"
                                alt="Author"
                                className="h-7 w-7 rounded-full object-cover"
                            />
                            <span>Jules Wang</span>
                        </div>
                        <span>1 day ago</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                        Why inference stacks are redesigning the dev workflow
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #ai
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #infra
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #workflow
                        </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <UpIcon />
                                2.4K
                            </span>
                            <span className="flex items-center gap-1">
                                <DownIcon />
                                120
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <EyeIcon />
                            1M views
                        </span>
                    </div>
                </article>
            </div>
            <div
                className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                style={{ animationDelay: "120ms" }}
            >
                <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="aspect-video overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                            alt="Developer laptop"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=64&h=64&q=80"
                                alt="Author"
                                className="h-7 w-7 rounded-full object-cover"
                            />
                            <span>Mara Chen</span>
                        </div>
                        <span>3 hours ago</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                        Designing observability for AI product teams at scale
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #ops
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #metrics
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #scale
                        </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <UpIcon />
                                3.1K
                            </span>
                            <span className="flex items-center gap-1">
                                <DownIcon />
                                48
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <EyeIcon />
                            642K views
                        </span>
                    </div>
                </article>
            </div>
            <div
                className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                style={{ animationDelay: "240ms" }}
            >
                <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="aspect-video overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
                            alt="Modern workspace"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=64&h=64&q=80"
                                alt="Author"
                                className="h-7 w-7 rounded-full object-cover"
                            />
                            <span>Imani Okoye</span>
                        </div>
                        <span>2 days ago</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                        From Figma to production: the new generation of component labs
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #design
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #system
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1">
                            #collab
                        </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <UpIcon />
                                1.8K
                            </span>
                            <span className="flex items-center gap-1">
                                <DownIcon />
                                92
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <EyeIcon />
                            410K views
                        </span>
                    </div>
                </article>
            </div>
        </>
    );
}