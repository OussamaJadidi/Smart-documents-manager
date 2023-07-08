import React from 'react'
import RegistrationPage from '@/components/RegistrationPage'
import { PrismaClient } from '@prisma/client'

async function fetchTheUserData(id){
    const prisma = new PrismaClient()
    const userData = await prisma.users.findFirst({
        where:{
            Id_user : id,
        }
    })
    console.log(userData)
    return userData
}
export default async function modifySomeOne({params}) {
    const {
        nom,
        prenom,
        email,
        ppr,
        cin,
        grade,
        echelle,
        echelon,
        service,
        option,
        adresse,
        sexe,
        photo,
    }= await fetchTheUserData(params.id)
  return (
    <RegistrationPage
        _nom= {nom}
        _prenom= {prenom}
        _email= {email}
        _ppr_cnt= {ppr}
        _cin= {cin}
        _grade= {grade}
        _echelle= {echelle}
        _echelon= {echelon}
        _service= {service}
        _option= {option}
        _adresse= {adresse}
        _sexe= {sexe}
        _photo= {photo}
        typeRegistration= "modifier" />
      )
    }
