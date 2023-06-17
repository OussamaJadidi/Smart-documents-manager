import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(request) {
  const body = await request.json();
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
  console.log(body)
  if (!nom || !prenom) {
    return new NextResponse("Missing fields", { status: 404 });
  }

  const prisma = new PrismaClient();
  const exist = await prisma.users.findUnique({
    where:{
        nom_prenom:{
            nom,
            prenom
        }
    }
  })
  if(exist){
    throw new Error("User already Exist")
  }
  if(photo){
    const photoS = JSON.parse(photo);

    var imageData = await photoS.arrayBuffer();}
  const user = await prisma.users.create({
    data: {
      nom,
      prenom,
      email,
      ppr:ppr_cnt,
      cnt:ppr_cnt,
      cin,
      grade,
      echelle,
      echelon,
      service,
      option,
      adresse,
      sexe,
      image: imageData,
    },
  });
  await prisma.user.$disconnect();

  return NextResponse.json(user);
}
