import React from 'react'
import Template from "./Template"

export default function AnnulationDeConge({handleDocumentsComponents}) {
    return (
    <Template handleDocumentsComponents={handleDocumentsComponents} title="Demande D'anulation de Congé">
      <div className='flex flex-col items-center justify-center py-4'>
            <div className=' w-10/12'><span className='font-medium'>La date du :</span><span><input type='date'   className='py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center'/></span></div>
            <div className=' w-10/12'><span className='font-medium'>La date au :</span><span><input type='date'   className='py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center'/></span></div>
        </div>
    </Template>
      )
}
