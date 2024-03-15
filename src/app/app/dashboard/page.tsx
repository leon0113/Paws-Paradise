import Branding from "@/components/Branding";
import ContentBlock from "@/components/ContentBlock";
import PetDetails from "@/components/PetDetails";
import PetList from "@/components/PetList";
import SearchForm from "@/components/SearchForm";
import Stats from "@/components/Stats";

export default async function Dashboard() {

    const response = await fetch('https://bytegrad.com/course-assets/projects/petsoft/api/pets');

    if (!response.ok) throw new Error('Could not fetch pets');

    const data = await response.json();
    // console.log(data);

    return (
        <main>
            <div className="flex justify-between items-center text-white py-8">
                <Branding />
                <Stats />
            </div>
            {/* ---------------------------------- */}
            <div className="grid grid-rows-[45px,300px,500px] md:grid-cols-3 md:grid-rows-[45px_1fr] gap-4 md:h-[600px]">
                <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1 ">
                    <SearchForm />
                </div>

                <div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
                    <ContentBlock>
                        <PetList pets={data} />
                    </ContentBlock>
                </div>

                <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full ">
                    <ContentBlock>
                        <PetDetails />
                    </ContentBlock>
                </div>
            </div>
        </main>
    )
}
