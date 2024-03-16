'use server';

import prisma from "@/lib/db";
import { Pet } from "@/lib/type";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function addPet(newPet: Omit<Pet, 'id'>) {

    await sleep(2000);

    try {
        await prisma.pet.create({
            data: newPet
        });
    } catch (error) {
        return {
            message: "Could not add pet"
        }
    }

    revalidatePath('/app', 'layout');
}


export async function editPet(petId: string, petData: Omit<Pet, 'id'>) {
    await sleep(2000);

    try {
        await prisma.pet.update({
            where: {
                id: petId,
            },
            data: petData
        });
    } catch (error) {
        return {
            message: "Could not edit pet"
        }
    }

    revalidatePath('/app', 'layout');
}


export async function deletePet(petId: string) {
    await sleep(1000);

    try {
        await prisma.pet.delete({
            where: {
                id: petId,
            },
        });
    } catch (error) {
        return {
            message: "Could not delete pet"
        }
    }

    revalidatePath('/app', 'layout');
}