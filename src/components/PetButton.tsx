'use client'
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { PetButtonProps } from "@/lib/type";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import PetForm from "./PetForm";
import { useState } from "react";

export default function PetButton({ actionType, onClick }: PetButtonProps) {

    const [isFormOpen, setIsFormOpen] = useState(false);

    if (actionType === "add") {
        return (
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                    <Button size="icon">
                        <PlusIcon className="h-6 w-6" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add a new pet</DialogTitle>
                    </DialogHeader>
                    <PetForm actionType={actionType} onFormSubmission={() => setIsFormOpen(false)} />
                    <DialogFooter></DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }
    if (actionType === "edit") {
        return (
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                    <Button variant={"secondary"}>
                        Edit
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit info</DialogTitle>
                    </DialogHeader>
                    <PetForm actionType={actionType} onFormSubmission={() => setIsFormOpen(false)} />
                    <DialogFooter></DialogFooter>
                </DialogContent>
            </Dialog>
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
