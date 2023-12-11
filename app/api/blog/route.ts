import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}

export const GET=async(req:Request,resp:NextResponse)=>{
   try {
    await main();
    const posts=await prisma.post.findMany();
    return NextResponse.json({message:"Success",posts},{status:200})
    console.log("GET");
   } catch (error) {
    return NextResponse.json({message:"Error"},{status:500})
   }finally {
    await prisma.$disconnect();
   }
}

export const POST=async(req:Request,resp:NextResponse)=>{
    try {
        const {title,description}=await req.json();
        await main();
        const post=await prisma.post.create({data:{title,description}});
        return NextResponse.json({message:"Success",post},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Error"},{status:500})
    }finally{
        await prisma.$disconnect();
    }
    console.log("POST");
}