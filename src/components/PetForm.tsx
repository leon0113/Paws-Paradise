'use client'
import { usePetContext } from "@/lib/hooks";
import { Petform, petFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PetFormButton from "./PetFormButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";



export default function PetForm({ actionType, onFormSubmission }: { actionType: "add" | "edit", onFormSubmission: () => void }) {

    const { selectedPet, handleAddPet, handleEditPet } = usePetContext();

    const {
        register,
        trigger,
        getValues,
        formState: { errors }
    } = useForm<Petform>({
        resolver: zodResolver(petFormSchema),
        defaultValues:
            actionType === "edit"
                ? {
                    name: selectedPet?.name,
                    ownerName: selectedPet?.ownerName,
                    imageUrl: selectedPet?.imageUrl,
                    age: selectedPet?.age,
                    notes: selectedPet?.notes,
                }
                : undefined,
    });

    return (
        <form

            action={async () => {
                const result = await trigger();
                if (!result) return;

                onFormSubmission();

                const petData = getValues();
                petData.imageUrl = petData.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1NS_RWR-9GwFLrsaDCZweYvly52DBQlUrZWRsZvpxQ&s";

                if (actionType === "add") {
                    await handleAddPet(petData);
                } else if (actionType === "edit") {
                    await handleEditPet(selectedPet!.id, petData);
                }
            }}
            className="flex flex-col">
            <div className="space-y-3">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input {...register('name')} id="name" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="ownerName">Owner name</Label>
                    <Input {...register('ownerName')} id="ownerName" />
                    {errors.ownerName && <p className="text-red-500">{errors.ownerName.message}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="imageUrl">Use Unplash image Url</Label>
                    <Input {...register('imageUrl')} id="imageUrl" />
                    {errors.imageUrl && <p className="text-red-500">{errors.imageUrl.message}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="age">Age</Label>
                    <Input {...register('age')} id="age" />
                    {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" {...register('notes')} />
                    {errors.notes && <p className="text-red-500">{errors.notes.message}</p>}
                </div>

            </div>
            <PetFormButton actionType={actionType} />
        </form>
    )
}
