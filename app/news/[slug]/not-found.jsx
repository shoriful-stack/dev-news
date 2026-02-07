"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function NewsNotFound() {
    const { slug } = useParams();

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-semibold text-white">
                This News with <span className="text-cyan-400">{slug}</span> id was not found!
            </h1>

            <Link
                href="/"
                className="mt-6 rounded-md border border-cyan-400/40 px-5 py-2 text-sm text-cyan-400 hover:bg-cyan-400/10"
            >
                Back to Home
            </Link>
        </div>
    );
}
