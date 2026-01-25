export function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <circle
                cx={11}
                cy={11}
                r={7}
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M20 20L17 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}
export function UpIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-emerald-300"
        >
            <path d="M12 4L5 11H9V20H15V11H19L12 4Z" fill="currentColor" />
        </svg>
    )
}
export function DownIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-rose-300"
        >
            <path d="M12 20L19 13H15V4H9V13H5L12 20Z" fill="currentColor" />
        </svg>
    )
}
export function EyeIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-zinc-500"
        >
            <path
                d="M2 12C4.5 7 7.5 5 12 5C16.5 5 19.5 7 22 12C19.5 17 16.5 19 12 19C7.5 19 4.5 17 2 12Z"
                stroke="currentColor"
                strokeWidth="1.4"
            />
            <circle
                cx={12}
                cy={12}
                r={3}
                stroke="currentColor"
                strokeWidth="1.4"
            />
        </svg>
    )
}