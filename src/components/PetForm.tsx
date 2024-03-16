'use client'
import { usePetContext } from "@/lib/hooks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function PetForm({ actionType, onFormSubmission }: { actionType: "add" | "edit", onFormSubmission: () => void }) {

    const { handleAddPet } = usePetContext();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newPet = {
            name: formData.get("name") as string,
            ownerName: formData.get("ownerName") as string,
            imageUrl: formData.get("imageUrl") as string || '/pet-placeholder.png' as string,
            age: +(formData.get("age") as string),
            notes: formData.get("notes") as string,
        };
        // console.log(newPet);
        handleAddPet(newPet);
        onFormSubmission();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="space-y-3">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" required />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="ownerName">Owner name</Label>
                    <Input id="ownerName" name="ownerName" type="text" required />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="imageUrl">Image Url</Label>
                    <Input id="imageUrl" name="imageUrl" type="text" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="agw">Age</Label>
                    <Input id="age" name="age" type="text" required />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" name="notes" rows={3} required />
                </div>
            </div>
            <Button type="submit" className="mt-5 self-end">
                {
                    actionType === 'add' ? "Add" : "Save"
                }
            </Button>
        </form>
    )
}
