import Template from "./Template"

export default function DemandeDeConge({handleDocumentsComponents}) {
  return (
    <Template handleDocumentsComponents={handleDocumentsComponents} title="Demande de Congé">
      <form action="">
          <div className='flex flex-col items-center justify-center py-4 pl-8'>
              <div className=' w-10/12'><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Annuel</span></div>
              
          </div>
          <hr />
          <div className='flex flex-col items-center justify-center py-4 pl-8'>
              <div className=' w-10/12 '><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Mariage</span></div>
              <div className=' w-10/12 '><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Maternité</span></div>
              <div className=' w-10/12 '><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Paternité</span></div>
              <div className=' w-10/12 '><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Pélerinage</span></div>
              <div className=' w-10/12 '><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Exceptionnel</span></div>
              <div className=' w-10/12 '><span className='font-medium'>Autre raison: </span><span><input type="text" placeholder="Raison" className='py-[-3px] border-0 border-b focus:border-transparent  border-black focus:ring-0 placeholder:text-center'/></span></div>
          </div>
          <hr />
          <div className='flex flex-col items-center justify-center py-4 pl-8'>
              <div className=' w-10/12 '><span><input type="checkbox"  className=''/></span><span className='font-medium pl-2'> Autorisation de quitter le territoire</span></div>
              <div className=' w-10/12'><span className='font-medium'>La date du :</span><span><input type='date'   className='py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center'/></span></div>
          </div>
          
        </form>
    </Template>
  )
}
