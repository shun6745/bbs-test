import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function Get(req: Request) {
    const allBBSposts = await prisma.post.findMany
    return NextResponse.json(allBBSposts);
}