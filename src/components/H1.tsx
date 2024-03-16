import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function H1({ className, children }: { className?: string, children?: ReactNode }) {
    return (
        <h1 className={cn("font-medium text-2xl leading-6 text-white", className)}>{children}</h1>
    )
}
