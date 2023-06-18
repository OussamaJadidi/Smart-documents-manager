import { PrismaClient } from "@prisma/client";

export const POST = async (request) => {
  const body = await request.json();
  try {
    const {
     title,
     content
    } = body;

    const prisma = new PrismaClient();
  
    const document = await prisma.Document.create({
      data: {
      title,
      content: content.arrayBuffer()
      },
    });
    
    return new Response(JSON.stringify(document),{status:200});
  } catch (error) {
    return new Response("something went wrong", { status: 400 });
  }
}
