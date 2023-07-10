"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import {useState} from 'react'
import Image from "next/image"
import { PrismaClient } from '@prisma/client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { SignoutLg, SignoutSm } from './Buttons'


export default function Header({name,prenom,AreUTheAdmin}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <header className = 'header font-satoshi flex justify-between items-center pr-4 ' >
        <div>
          <img src="/assets/icons/chu.jpg" alt="CHU logo" width={120} height={120} />
        </div>
        {AreUTheAdmin =="non" &&
        <>

        <div className='hidden md:flex gap-4 items-center  '>
           <ul className='menuBigScreen flex font-satoshi font-medium'>
               <li className='hover:text-blue-700 hover:font-semibold ml-2'><a href="./Homme">Accueil</a></li>
               <li className='hover:text-blue-700 hover:font-semibold ml-2'><a href='#impressionDesDocuments'>Impression des documents</a></li>
               <li className='hover:text-blue-700 hover:font-semibold ml-2'><a href="#guideDesFormations">Guide Formations</a></li>
           </ul>
           <SignoutLg />
        </div> 
        
        <div className="md:hidden tracking-tighter  items-center z-40">
          { menuOpen ? 
            <FontAwesomeIcon icon={faX} style={{fontSize: "2rem"}} onClick={()=> {setMenuOpen(!menuOpen)}} /> :
            <FontAwesomeIcon icon={faBars} style={{fontSize: "2rem"}} onClick={()=> {setMenuOpen(!menuOpen)}}/> 
          }  
          {menuOpen &&
          <div className='absolute  left-1/2 translate-x-[-50%] top-24 flex justify-center border bg-white border-black w-10/12  py-6  z-40 rounded-lg'>
          <ul className='menuBigScreen flex flex-col items-center font-satoshi font-medium w-fit   z-40'>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><Link href="./">Accueil</Link></li>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><a href='#impressionDesDocuments'>Impression des documents</a></li>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><a href="#guideDesFormations">Guide Formations</a></li>
              <SignoutSm />
          </ul>
        </div> 
          }
          
        </div>
        </>
        }
        {AreUTheAdmin =="yes" &&
        <>

        <div className='hidden md:flex gap-4 items-center  '>
           <ul className='menuBigScreen flex font-satoshi font-medium'>
               <Link href ="/register/creation"><li className='hover:text-blue-700 hover:font-semibold ml-2'>Ajouter un personne</li></Link>
           </ul>
           <SignoutLg />
        </div> 
        
        <div className="md:hidden tracking-tighter  items-center z-40">
          { menuOpen ? 
            <FontAwesomeIcon icon={faX} style={{fontSize: "2rem"}} onClick={()=> {setMenuOpen(!menuOpen)}} /> :
            <FontAwesomeIcon icon={faBars} style={{fontSize: "2rem"}} onClick={()=> {setMenuOpen(!menuOpen)}}/> 
          }  
          {menuOpen &&
          <div className='absolute  left-1/2 translate-x-[-50%] top-24 flex justify-center border bg-white border-black w-10/12  py-6  z-40 rounded-lg'>
          <ul className='menuBigScreen flex flex-col items-center font-satoshi font-medium w-fit   z-40'>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><Link href ="/register/creation">Ajouter un personne</Link></li>

              <SignoutSm />
          </ul>
        </div> 
          }
          
        </div>
        </>
        }
    </header>
    <div className={menuOpen ?'fixed top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-gray-400 to-transparent' : 'hidden'}></div>

    </>
  )
}
