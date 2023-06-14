import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function Homme() {
  const session = await getServerSession(authOptions)
 // const prisma = new PrismaClient();
  // const user = await prisma.users.findUnique({
  //   where: {
  //     nom_prenom: {
  //       nom: name,
  //       prenom: prenom,
  //     },
  //   },
  // });
  //  await prisma.$disconnect();
  // const bufferData = user.image; // The <Buffer> image data
  // // Convert the buffer data to a base64-encoded string
  // const base64String = bufferData.toString("base64");
  // // Create an <img> element and set the src attribute to the base64 string
  // const ssrc = "data:image/jpeg;base64," + base64String;
  return (
    <div className="w-screen border-4 ">
      {session && <Header name={session.user.name} prenom={session.user.prenom}/>}
      
      <div>
        <div>
          <img src="" alt="Photo personnelle" />
          <div>
            <div>
              <h1>Oussama jadidi</h1>
              <h6>It manager</h6>
            </div>
            <div>
              <div>
              <FontAwesomeIcon icon={faWhatsapp} style={{color: "green"}} />
                <span>oussamajadidi2020@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <button>Editer</button>
      </div>
    </div>
  );
}
