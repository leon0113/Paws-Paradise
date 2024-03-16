import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function PetFormButton({ actionType }: { actionType: "add" | "edit" }) {

    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className="mt-5 self-end">
            {pending ? "Waiting" : (actionType === 'add' ? "Add" : "Save")}
        </Button>
    )
}
