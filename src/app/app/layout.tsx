import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import BackGroundPattern from "@/components/BackGroundPattern";
import { Toaster } from "@/components/ui/sonner";
import PetContextProvider from "@/contexts/PetContextProvider";
import SearchContextProvider from "@/contexts/SearchContextProvider";
import prisma from "@/lib/db";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {

    // const response = await fetch('https://bytegrad.com/course-assets/projects/petsoft/api/pets');

    // if (!response.ok) throw new Error('Could not fetch pets');

    // const data: Pet[] = await response.json();
    // // console.log(data);

    const data = await prisma.pet.findMany();
    await prisma.user.findMany({})


    return (
        <>
            <BackGroundPattern />
            <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
                <AppHeader />

                <SearchContextProvider>
                    <PetContextProvider data={data}>
                        {children}
                    </PetContextProvider>
                </SearchContextProvider>

                <AppFooter />
            </div>
            <Toaster position="top-center" />
        </>
    )
}
