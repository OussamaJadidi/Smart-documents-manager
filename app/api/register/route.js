import { PrismaClient } from "@prisma/client";

export const POST = async (request) => {
  const body = await request.json();
  try {
    const {
      nom,
      prenom,
      email,
      ppr_cnt,
      cin,
      grade,
      echelle,
      echelon,
      service,
      option,
      adresse,
      sexe,
      photo,
    } = body;
    console.log(body);
    if (!nom || !prenom) {
      throw new Error("Missing fields");
    }

    const prisma = new PrismaClient();
    const exist = await prisma.users.findUnique({
      where: {
        nom_prenom: {
          nom,
          prenom,
        },
      },
    });
    if (exist) {
      throw new Error("User already Exist");
    }
    // if (photo) {
    //   const photoS = JSON.parse(photo);
    //   var imageData = await photoS.arrayBuffer();
    // }
    const user = await prisma.users.create({
      data: {
        nom,
        prenom,
        email,
        ppr: ppr_cnt,
        cnt: ppr_cnt,
        cin,
        grade,
        echelle,
        echelon,
        service,
        option,
        adresse,
        sexe,
        // image: imageData,
      },
    });
    
    return new Response(JSON.stringify(user),{status:200});
  } catch (error) {
    const errorMessage = error.message;
    return new Response(JSON.stringify({ error: errorMessage }), { status: 400 });
  }
}
