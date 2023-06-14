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


export default function Header({name,prenom}) {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("rendred")
  return (
    <>
    <header className = 'header font-satoshi flex justify-between items-center pr-4 ' >
        <div>
          <img src="/assets/icons/chu.jpg" alt="CHU logo" width={120} height={120} />
        </div>

        <div className='hidden md:flex gap-4 items-center  '>
           <ul className='menuBigScreen flex font-satoshi font-medium'>
               <li className='hover:text-blue-700 hover:font-semibold ml-2'><Link href="./">Accueil</Link></li>
               <li className='hover:text-blue-700 hover:font-semibold ml-2'><a href='#impressionDesDocuments'>Impression des documents</a></li>
               <li className='hover:text-blue-700 hover:font-semibold ml-2'><a href="#guideDesFormations">Guide Formations</a></li>
           </ul>
           <button className='flex bg-blue-700 rounded-md text-white px-4 py-2 font-medium hover:scale-95 hover:shadow hover:shadow-blue-500 transition-transform'>Se deconnecter</button>
        </div> 
        
        <div className="md:hidden tracking-tighter  items-center z-40">
          { menuOpen ? 
            <FontAwesomeIcon icon={faX} style={{fontSize: "2rem"}} onClick={()=> {setMenuOpen(!menuOpen)}} /> :
            <FontAwesomeIcon icon={faBars} style={{fontSize: "2rem"}} onClick={()=> {setMenuOpen(!menuOpen)}}/> 
          }  
          {menuOpen &&
          <div className='absolute  left-1/2 translate-x-[-50%] top-24 flex justify-center border bg-white border-black w-10/12  py-6  z-40'>
          <ul className='menuBigScreen flex flex-col items-center font-satoshi font-medium w-fit   z-40'>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><Link href="./">Accueil</Link></li>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><a href='#impressionDesDocuments'>Impression des documents</a></li>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><a href="#guideDesFormations">Guide Formations</a></li>
              <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 '><button>Se deconnecter</button></li>
          </ul>
        </div> 
          }
          
        </div>
    </header>
    <div className={menuOpen ?'absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-gray-300 to-transparent' : 'hidden'}></div>

    </>
  )
}
