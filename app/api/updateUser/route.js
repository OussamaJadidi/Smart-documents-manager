import { PrismaClient } from "@prisma/client";

export async function PATCH(request) {
  const {
    id,
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
  } = await request.json();
  console.log("the modified data is ",{
    id,
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
  } )
  const prisma = new PrismaClient();
  try {
    const user = await prisma.users.update({
      where: {
       Id_user:id,
      },
      data: {
        nom: nom,
        prenom: prenom,
        email: email,
        ppr: +ppr_cnt,
        cnt: +ppr_cnt,
        cin: cin,
        grade: +grade,
        echelle: +echelle,
        echelon: +echelon,
        service: service,
        option: option,
        adresse: adresse,
        sexe: sexe,
      },
    });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify(
        "Something went Wrong,you must update the informations again",
        { status: 500 }
      )
    );
  }
}
