import { Button } from "./ui/button";

export default function PetFormButton({ actionType }: { actionType: "add" | "edit" }) {


    return (
        <Button type="submit" className="mt-5 self-end">
            {actionType === 'add' ? "Add" : "Save"}
        </Button>
    )
}
