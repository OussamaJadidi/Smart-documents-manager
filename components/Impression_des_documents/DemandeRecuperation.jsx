import Template from "./Template"

export default function DemandeRecuperation({handleDocumentsComponents}) {
  return (
    <Template handleDocumentsComponents={handleDocumentsComponents} title="Demande de Recuperation">
        <div className='flex flex-col items-center justify-center py-4'>
            <div className=' w-10/12'><span className='font-medium'>Demande de récupération Accordée : </span><span><input type="text" placeholder="Raison..." className='py-[-3px] border-0 border-b focus:border-transparent  border-black focus:ring-0 placeholder:text-center'/></span></div>
            <div className=' w-10/12'><span className='font-medium'>Motif : </span><span><input type="text" placeholder="Raison..." className='py-[-3px] border-0 border-b focus:border-transparent  border-black focus:ring-0 placeholder:text-center'/></span></div>
            <div className=' w-10/12'><span className='font-medium'>Date : </span><span><input type='date'   className='py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center'/></span></div>
        </div>
    </Template>
  )
}
