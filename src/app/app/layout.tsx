import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import BackGroundPattern from "@/components/BackGroundPattern";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <BackGroundPattern />
            <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
                <AppHeader />
                {children}
                <AppFooter />
            </div>
        </>
    )
}
