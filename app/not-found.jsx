import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-white">
                {t("page_not_found")}
            </h1>

            <p className="mt-3 text-zinc-400">
                {t("not_found_desc")}
            </p>

            <Link
                href="/"
                className="mt-6 rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:bg-cyan-400"
            >
                {t("back_home")}
            </Link>
        </div>
    );
}
