import { PrismaClient } from "@prisma/client";

export async function DELETE(request,{params}){
    const prisma = new PrismaClient()

    try{
        const user = await prisma.users.delete({
            where:{
                Id_user: params.id
            }
        })
        return new Response(JSON.stringify("User deleted successfuly"),{status: 200})
    }catch(error){
        return new Response(
            JSON.stringify(
              JSON.stringify("Something went Wrong,Try to Delete that user Again"),
              { status: 500 }
            )
          );
    }
}