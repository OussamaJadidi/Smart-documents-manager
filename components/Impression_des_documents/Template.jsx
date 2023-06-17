"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX,
 } from "@fortawesome/free-solid-svg-icons";

export default function Template({children,title, handleDocumentsComponents}) {
  return (
    <div className="template" onClose={() => {
      document
      .querySelector(".template")
      .parentNode
      .classList.add("hidden");
      }}
      
      >
    <div  className='w-10/12  border bordre-black bg-white absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-20 py-4 px-4'>
    <FontAwesomeIcon icon={faX} className="closer absolute max-sm:right-[-.8rem] max-sm:top-[-.8rem] border max-sm:border-gray bg-white p-3 max-sm:rounded-full right-4 top-4 cursor-pointer" onClick={() => {handleDocumentsComponents()}}/>
        <h1 className='font-semiBold border border-gray-600 rounded-md w-fit relative left-1/2 translate-x-[-50%] px-4 py-2 '>{title}</h1>

            {children}
        <div className='flex justify-center md:justify-end px-6 pt-4 gap-2'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded">
            Imprimer
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded">
            Télécharger
            </button>
        </div>
    </div>
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-gray-400 to to-transparent z-10' onClick={() => {handleDocumentsComponents()}}></div>
    </div>
  )
}
