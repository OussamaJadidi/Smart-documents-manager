import Template from "./Template"

export default function CessionReprise({handleDocumentsComponents}) {
  return (
    <Template handleDocumentsComponents={handleDocumentsComponents} title="Cessation Reprise">
        <form action="">
          <div className='flex flex-col items-center justify-center py-4 pl-8'>
              <div className=' w-10/12 max-sm:pt-4'><span><input type="radio" name="typeDeRepri" className=''/></span><span className='font-medium pl-2'>    Cessation de service</span></div>
              <div className=' w-10/12 max-sm:pt-4'><span><input type="radio" name="typeDeRepri" className=''/></span><span className='font-medium pl-2'>    Prise de service</span></div>
              <div className=' w-10/12 max-sm:pt-4'><span><input type="radio" name="typeDeRepri" className=''/></span><span className='font-medium pl-2'>    Reprise de service</span></div>
          </div>
        </form>
    </Template>
  )
}
