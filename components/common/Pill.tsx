import { PillProps } from "@/interfaces";

export default function Pill({ label, onClick, className }: PillProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm transition ${className}`}
        >
            {label}
        </button>
    );
}
