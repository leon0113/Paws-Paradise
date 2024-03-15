import { cn } from "@/lib/utils";
import { ReactNode } from "react";


export default function ContentBlock({ className, children }: { className?: string, children: ReactNode }) {
    return (
        <div className={cn("bg-[#F7F8FA] shadow-sm rounded-md overflow-hidden h-full w-full", className)}>
            {children}
        </div>
    )
}
