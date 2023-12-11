import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// export const PUT = async (req: Request, res: NextResponse) => {
//   try {
//     const id = req.url.split("/blog/")[1];
//     const { title, description } = await req.json();
//     await main();
//     const post = await prisma.post.update({
//       data: { title, description },
//       where: { id },
//     });
//     return NextResponse.json({ message: "Success", post }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    const requestBody = await req.text(); // Retrieve the request body as text

    // Check if the request body is empty or not valid JSON
    if (!requestBody || requestBody.trim() === '') {
      return NextResponse.json(
        { message: "Invalid request body or empty data" },
        { status: 400 }
      );
    }

    const { title, description } = JSON.parse(requestBody); // Parse the JSON

    await main(); // Assuming `main()` handles Prisma connection

    const post = await prisma.post.update({
      data: { title, description },
      where: { id },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    // Log the error for better understanding of the issue
    console.error("Error occurred during PUT request:", error);

    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};