import { PrismaClient } from "@prisma/client";

export default async function GET(request) {
    try {
        const prisma = new PrismaClient();
        const users = await prisma.users.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all the data", {
      status: 400
    });
  }
}
