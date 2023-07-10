import React from 'react'
import RegistrationPage from '@/components/RegistrationPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { PrismaClient } from '@prisma/client'
import Link from "next/link"
async function fetchTheUserData(id){
    const prisma = new PrismaClient()
    const userData = await prisma.users.findFirst({
        where:{
            Id_user : id,
        }
    })
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
    <div>
        <Link href="/Homme"><button className="border border-black font-roboto rounded-md px-4 py-2 relative top-4 left-4"><FontAwesomeIcon icon={faArrowLeft} /> Page précédent </button></Link>
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
            _id={params.id}
            typeRegistration= "modifier" />
    </div>
      )
    }
