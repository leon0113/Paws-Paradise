'use server';

import prisma from "@/lib/db";
import { Pet } from "@/lib/type";

export async function addPet(pet: Omit<Pet, 'id'>) {
    await prisma.pet.create({
        data: pet
    });
}