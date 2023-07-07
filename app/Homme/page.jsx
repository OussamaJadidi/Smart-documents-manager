import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { faChevronDown,
  faPen
 } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import MoreData from "@/../components/CSR_components/MoreData"
import ImpressionDesDocuments from "@/components/CSR_components/ImpressionDesDocuments"
import AjouterGuideFormation from "@/components/CSR_components/AjouterGuideFormation"
import MesFormations from "@/components/CSR_components/MesFormations"
import {redirect} from "next/navigation"
export default async function Homme() {
  //Get the user data from the session
  const session = await getServerSession(authOptions);
  if(!session){
      redirect("/login")
  }
  console.log(session)
  if(session){
    if (session.user.name == "admin" && session.user.prenom == "admin"){
      redirect("/Admin")
    }
  }
  //fetch the data base
  const prisma = new PrismaClient();
  const user = await prisma.users.findUnique({
    where: {
      nom_prenom: {
        nom: session.user.name,
        prenom: session.user.prenom,
      },
    },
  });
  await prisma.$disconnect();
  if(user.image){

      var bufferData = user.image; // The <Buffer> image data
      // Convert the buffer data to a base64-encoded string
      var base64String = bufferData.toString("base64");
      // Create an <img> element and set the src attribute to the base64 string
      var ssrc = "data:image/jpeg;base64," + base64String;
  }
  
  return (
    <div className="w-full">
{/* Start Header  */}
        {session && (
          <Header name={session.user.name} prenom={session.user.prenom} />
        )}
{/* End Header  */}

{/* Start Card of the user data  */}
      <div className="border relative left-[50%] translate-x-[-50%] border-black w-11/12 py-2 px-2 bg-gradient-to-r from-blue-50 to-transparent mt-4 rounded-lg">
        {/* Picture /name / Options /button of Modify Profile  */}
        <div className="dataCard  flex justify-between  items-center">
          <div className="flex">
            <img
              src={user.image ? ssrc: ""}
              width={70}
              height={70}
              className="rounded-md hover:scale-110 transition-transform"
            />
            <div className="relative top-2 left-2">
              <h1 className="font-bold font-roboto text-lg">{`${user.nom} ${user.prenom}`}</h1>
              <h4 className="font-italic text-sm text-gray-500">
                {user.option}
              </h4>
            </div>
          </div>
          <button className=" w-fit bg-transparent hover:bg-green-100 h-10 px-2  hover:border hover:border-black rounded-md relative   font-medium flex items-center overflow-ellipsis">
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>

        {/* More informations */}
        <div
          style={{ columnRule: "4px solid gray" }}
          className="moreData pt-4 sm:columns-2  transition-all hidden"
        >
          <h1
            className="font-bold text-center pb-4"
            style={{ columnSpan: "all" }}
          >
            Full Informations :
          </h1>
          <div className="firstRow pl-8">
            <div>
              <span className="font-roboto font-bold">Service : </span>
              <span>{session.user.service}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">Option : </span>
              <span>{session.user.option}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">Adresse : </span>
              <span>{session.user.adresse}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">CIN : </span>
              <span>{session.user.cin}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">Sexe : </span>
              <span>{session.user.sexe}</span>
            </div>
          </div>
          <div className="secondRow pl-8">
            <div>
              <span className="font-roboto font-bold">P.P.R/C.N.T : </span>
              <span>{session.user.ppr}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">Grade : </span>
              <span>{session.user.grade}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">Echelle : </span>
              <span>{session.user.echelle}</span>
            </div>
            <div>
              <span className="font-roboto font-bold">Echelon : </span>
              <span>{session.user.echelon}</span>
            </div>
            
          </div>
        </div>
        <MoreData />
      </div>
{/* End Card of the user data  */}
        
{/* Start Impression des documents */}
        <ImpressionDesDocuments />
{/* End Impression des documents */}
{/* Start Ajouter Guide formation */}
          <AjouterGuideFormation id="guideDesFormations" />
{/* End Ajouter Guide formation */}

{/* Start Ajouter Guide formation */}
          <MesFormations />
{/* End Ajouter Guide formation */}
    </div>
  );
}
