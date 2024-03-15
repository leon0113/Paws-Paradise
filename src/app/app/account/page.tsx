import ContentBlock from "@/components/ContentBlock";
import H1 from "@/components/H1";
import { Button } from "@/components/ui/button";

export default function Account() {
    return (
        <main>
            <H1 className='my-8'>My account</H1>
            <ContentBlock className="h-[600px]  flex flex-col gap-10 items-center justify-center" >
                <p className="">Logged in as *******</p>
                <Button>Sign out</Button>
            </ContentBlock>
        </main>
    )
}
