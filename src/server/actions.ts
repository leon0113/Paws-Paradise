'use server';

import prisma from "@/lib/db";
import { Pet } from "@prisma/client";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { PetNew } from "@/lib/type";
import { petFormSchema, petIdSchema } from "@/lib/schema";

export async function addPet(newPet: unknown) {

    await sleep(1000);

    const validatedPet = petFormSchema.safeParse(newPet);
    if (!validatedPet.success) {
        console.log(validatedPet.error);
        return {
            message: "Invalid pet data.",
        };
    }

    try {
        await prisma.pet.create({
            data: validatedPet.data
        });
    } catch (error) {
        console.log(error);
        return {
            message: "Could not add pet.",
        };
    }

    revalidatePath("/app", "layout");
}


export async function editPet(petId: unknown, newPetData: unknown) {
    // authentication check

    // validation
    const validatedPetId = petIdSchema.safeParse(petId);
    const validatedPet = petFormSchema.safeParse(newPetData);

    if (!validatedPetId.success || !validatedPet.success) {
        return {
            message: "Invalid pet data.",
        };
    }

    // authorization check


    // database mutation
    try {
        await prisma.pet.update({
            where: {
                id: validatedPetId.data,
            },
            data: validatedPet.data,
        });
    } catch (error) {
        return {
            message: "Could not edit pet.",
        };
    }

    revalidatePath("/app", "layout");
}

export async function deletePet(petId: string) {
    // await sleep(1000);

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