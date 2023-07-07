import { PrismaClient } from "@prisma/client";

export async function PATCH(request){
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
    } = await request.json()
    const prisma = new PrismaClient();
    try{
        const user = prisma.users.update({
            where:{
                nom_prenom: {
                    nom: nom,
                    prenom: prenom
                }
            },
            data:{
                nom: nom,
                prenom: prenom,
                email: email,
                ppr_cnt: ppr_cnt,
                cin: cin,
                grade: grade,
                echelle: echelle,
                echelon: echelon,
                service: service,
                option: option,
                adresse: adresse,
                sexe: sexe,
                photo: photo,
            }
        })
        return new Response(JSON.stringify(user),{status: 200})
    }catch(error){
        return new Response(JSON.stringify("Something went Wrong,you must update the informations again",{status:500}))
    }
}