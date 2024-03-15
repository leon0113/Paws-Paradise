import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { PetButtonProps } from "@/lib/type";

export default function PetButton({ actionType, onClick }: PetButtonProps) {
    if (actionType === "add") {
        return (
            <Button size="icon">
                <PlusIcon className="h-6 w-6" />
            </Button>
        )
    }
    if (actionType === "edit") {
        return (
            <Button variant={"secondary"}>
                Edit
            </Button>
        )
    }
    if (actionType === "delete") {
        return (
            <Button variant={"secondary"} onClick={onClick}>
                Checkout
            </Button>
        )
    }
}
