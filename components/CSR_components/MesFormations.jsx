import React from "react";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MesFormations() {
  // const prisma = new PrismaClient();
  // const session = await getServerSession(authOptions)
  // const documnets = prisma.Document.findMany({
  //   where:{
  //     userId: session.user.id
  //   }
  // })
  return (
    <>
      {/* Start Guide de formation  */}
      <div className="border mb-4 relative left-[50%] translate-x-[-50%] border-black w-11/12 py-6 px-10 bg-gradient-to-r from-blue-50 to-transparent mt-4 rounded-lg">
        <h1
          className="font-bold text-center pb-4"
          style={{ columnSpan: "all" }}
        >
          Mes formations :
        </h1>
        <p>

        </p>
      </div>
    </>
  );
}
