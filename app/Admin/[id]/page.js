import React from 'react'
import RegistrationPage from '@/components/RegistrationPage'
import { PrismaClient } from '@prisma/client'

async function fetchTheUserData(id){
    const prisma = new PrismaClient()
    const userData = await prisma.users.findFirst({
        where:{
            Id_user : "6552z",
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
    }= await fetchTheUserData("6552z")
  return (
    <RegistrationPage
        _nom= "hiii"
        _prenom= {prenom}
        _email= {email}
        _ppr_cnt= {ppr_cnt}
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
