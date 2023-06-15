import Template from "./Template"

export default function AutorisationDabsence({handleDocumentsComponents}) {
  return (
    <Template handleDocumentsComponents={handleDocumentsComponents} title="Demande D'autorisation D'absence">
        <div className='flex flex-col items-center justify-center py-4'>
            <div className=' w-10/12'><span className='font-medium'>Demande de m’absenter le :</span><span><input type='date'   className='py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center'/></span></div>
            <div className=' w-10/12 max-sm:pt-4'><span className='font-medium'>Raison: </span><span><input type="text" placeholder="Raison..." className='py-[-3px] border-0 border-b focus:border-transparent  border-black focus:ring-0 placeholder:text-center'/></span></div>
        </div>
    </Template>
  )
}
