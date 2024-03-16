'use client'
import { usePetContext } from "@/lib/hooks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { addPet, editPet } from "@/server/actions";
import PetFormButton from "./PetFormButton";
import { toast } from "sonner";
import { useFormState } from "react-dom";

export default function PetForm({ actionType, onFormSubmission }: { actionType: "add" | "edit", onFormSubmission: () => void }) {

    const { selectedPet, handleAddPet, handleEditPet } = usePetContext();

    //    const [error, formAction] = useFormState(addPet, {})
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     const formData = new FormData(event.currentTarget);
    //     const newPet = {
    //         name: formData.get("name") as string,
    //         ownerName: formData.get("ownerName") as string,
    //         imageUrl: formData.get("imageUrl") as string || '/pet-placeholder.png' as string,
    //         age: +(formData.get("age") as string),
    //         notes: formData.get("notes") as string,
    //     };
    //     // console.log(newPet);
    //     if (actionType === 'add') {
    //         handleAddPet(newPet);
    //     } else if (actionType === 'edit') {
    //         handleEditPet(selectedPet!.id, newPet);
    //     }

    //     onFormSubmission();
    // }

    return (
        <form action={async (formData) => {
            onFormSubmission();
            const petData = {
                name: formData.get("name") as string,
                ownerName: formData.get("ownerName") as string,
                imageUrl: formData.get("imageUrl") as string || '/pet-placeholder.png' as string,
                age: +(formData.get("age") as string),
                notes: formData.get("notes") as string,
            };

            if (actionType === 'add') {
                await handleAddPet(petData)
            } else if (actionType === 'edit') {
                await handleEditPet(selectedPet!.id, petData)
            }

        }}
            className="flex flex-col">
            <div className="space-y-3">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" required defaultValue={actionType === 'edit' ? selectedPet?.name : ""} />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="ownerName">Owner name</Label>
                    <Input id="ownerName" name="ownerName" type="text" required defaultValue={actionType === 'edit' ? selectedPet?.ownerName : ""} />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="imageUrl">Image Url</Label>
                    <Input id="imageUrl" name="imageUrl" type="text" defaultValue={actionType === 'edit' ? selectedPet?.imageUrl : ""} />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="agw">Age</Label>
                    <Input id="age" name="age" type="text" required defaultValue={actionType === 'edit' ? selectedPet?.age : ""} />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" name="notes" rows={3} required defaultValue={actionType === 'edit' ? selectedPet?.notes : ""} />
                </div>
            </div>
            <PetFormButton actionType={actionType} />
        </form>
    )
}
