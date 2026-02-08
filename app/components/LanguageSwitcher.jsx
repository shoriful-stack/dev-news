"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1">
            <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-sm rounded-lg transition
          ${lang === "en"
                        ? "bg-cyan-400 text-black"
                        : "text-zinc-300 hover:bg-white/10"}`}
            >
                EN
            </button>

            <button
                onClick={() => setLang("bn")}
                className={`px-3 py-1 text-sm rounded-lg transition
          ${lang === "bn"
                        ? "bg-cyan-400 text-black"
                        : "text-zinc-300 hover:bg-white/10"}`}
            >
                বাংলা
            </button>
        </div>
    );
}
