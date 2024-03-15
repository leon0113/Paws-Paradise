import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
    return (
        <h1 className="font-medium text-2xl leading-6">{children}</h1>
    )
}
