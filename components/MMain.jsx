import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown,
 } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function MMain() {
  return (
    <div>
        {/* Start Card of the user data  */}
        <div className="border relative left-[50%] translate-x-[-50%] border-black w-11/12 py-2 px-2 bg-gradient-to-r from-blue-50 to-transparent mt-4 rounded-lg">

          {/* Picture /name / Options /button of Modify Profile  */}
          <div className="dataCard  flex justify-between items-end sm:items-center">
            <div className="flex">
              <img src={ssrc} width={70} height={70} className="rounded-md hover:scale-110 transition-transform" />
              <div className="relative top-2 left-2">
                <h1 className="font-bold font-roboto text-lg">Oussama jadidi</h1>
                <h4 className="font-italic text-sm text-gray-500"> Technicien en Développement informatique</h4>
              </div>
            </div>
            <button className=" w-fit bg-orange-400 h-10 px-2 py-2 hover:border hover:border-black rounded-md relative text-xs sm:right-4 font-medium flex items-center overflow-ellipsis">
              Editer profile
            </button>
          </div>

          {/* More informations */}
          <div style={{columnRule:"4px solid gray"}} className="moreData pt-4 sm:columns-2  transition-all hidden">
            <h1 className="font-bold text-center pb-4" style={{columnSpan: "all"}}>Full Informations :</h1>
            <div className="firstRow pl-8">
              <div><span className="font-roboto font-bold" >Service :  </span><span>{session.user.service}</span></div>
              <div><span className="font-roboto font-bold" >Option :  </span><span>{session.user.option}</span></div>
              <div><span className="font-roboto font-bold" >Adresse :  </span><span>{session.user.adresse}</span></div>
              <div><span className="font-roboto font-bold" >CIN :  </span><span>{session.user.cin}</span></div>
              <div><span className="font-roboto font-bold" >Sexe :  </span><span>{session.user.sexe}</span></div>
            </div>
            <div className="secondRow pl-8">
              <div><span className="font-roboto font-bold" >P.P.R :  </span><span>{session.user.ppr}</span></div>
              <div><span className="font-roboto font-bold" >Grade :  </span><span>{session.user.grade}</span></div>
              <div><span className="font-roboto font-bold" >Echelle :  </span><span>{session.user.echelle}</span></div>
              <div><span className="font-roboto font-bold" >Echelon :  </span><span>{session.user.echelon}</span></div>
              <div><span className="font-roboto font-bold" >C.N.T :   </span><span>{session.user.cnt}</span></div>
            </div>
          </div>
          <MoreData />
        </div>
      {/* Start Card of the user data  */}

      {/* Start impression des document Card  */}
      <div className="border relative left-[50%] translate-x-[-50%] border-black w-11/12 py-2 px-2 bg-gradient-to-r from-blue-50 to-transparent mt-4 rounded-lg">
      <div style={{columnRule:"4px solid gray"}} className=" pt-4 sm:columns-2  transition-all">
            <h1 className="font-bold text-center pb-4" style={{columnSpan: "all"}}>Impression des documents :</h1>
            <div className="firstRow pl-8" >
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".AutorisationDabsence").classList.toggle("hidden")}}  >Demande D'autorisation d'absence</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".CessionReprise").classList.toggle("hidden")}}  >Demande D'attestaion De Travail</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".AnnulationDeConge").classList.toggle("hidden")}}  >Demande D'anullation de Congé</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".DemandeDeConge").classList.toggle("hidden")}}  >Demande De Bulletin De Paie</button></div>
            </div>
            <div className="secondRow pl-8">
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".DemandeRecuperation").classList.toggle("hidden")}}  >Demande De Recuperation</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".AttestationDuTravail").classList.toggle("hidden")}}  >Demande De Congé</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={()=>{document.querySelector(".BulletinDePaie").classList.toggle("hidden")}}  >Cession Reprise</button></div>
            </div>
          </div>
      </div>
      <div className="">
        <div className="AutorisationDabsence hidden "><AutorisationDabsence  /></div>
        <div className="CessionReprise hidden "><CessionReprise  /></div>
        <div className="AnnulationDeConge hidden "><AnnulationDeConge  /></div>
        <div className="DemandeDeConge hidden "><DemandeDeConge  /></div>
        <div className="DemandeRecuperation hidden "><DemandeRecuperation  /></div>
        <div className="AttestationDuTravail hidden "><AttestationDeTravail  /></div>
        <div className="BulletinDePaie hidden "><BulletinDePaie  /></div>
      </div>
      {/* End impression des document Card  */}

      {/*  Guide de formation  */}
      {/*  Guide de formation  */}
    </div>
  )
}
