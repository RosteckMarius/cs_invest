import { cn } from "@/lib/utils.ts";

export const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#gradientId)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("animate-spin", "bg-none")}
        >
            <defs>
                <linearGradient id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#E6CC5F" }} />
                    <stop offset="50%" style={{ stopColor: "#EB4B4B" }} />
                    <stop offset="100%" style={{ stopColor: "#D32DE5" }} />
                </linearGradient>
            </defs>

            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    );
};
