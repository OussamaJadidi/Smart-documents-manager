import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import RegistrationPage from "@/components/RegistrationPage";
import { SignoutLg, SignoutSm } from "/components/Buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { DeleteUserButton, FilterProfil, ModifyUser } from "@/components/Buttons";
import Header from "@/components/Header";
import AdminMainPage from "@/components/AdminMainPage";

export default async function Admin() {
  //Get the user data from the session

  // const response = await fetch("http://localhost:3000/api/getAllUsers",{
  //   cahce: "no-cache"
  // });
  // const users = await response.json();
  const prisma = new PrismaClient();
  const users = await prisma.users.findMany();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  if(session.user.role !=="Admin"){
    redirect("/login");
  }
  return (
    <div>
      {/* Start the header  */}
      <Header AreUTheAdmin="yes" />
      {/* End the header  */}
      <div className="bg-white py-8 sm:py-16">
        <AdminMainPage users = {users}/>
      </div>
    </div>
  );
}

export function Employee({ id, nom, prenom, option, gender, img }) {
  let iconSrc
  if(gender==="Homme"){
    iconSrc="./assets/icons/male.png"
  }else{
    iconSrc="./assets/icons/female.png"

  }
  return (
    <li className="border-4 border-gray rounded-md p-2 flex items-center justify-between ">
      <div
        className="flex items-center gap-x-6 cursor-pointer"
        title="voir le profile"
      >
        <img
          className="h-16 w-16 rounded-full"
          src={iconSrc}
          alt=""
        />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {nom} {prenom}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            {option}
          </p>
        </div>
      </div>

      <div>
        <Link href={`Admin/${id}`}>
          <ModifyUser />
        </Link>
        <DeleteUserButton id={id} />
      </div>
    </li>
  );
}
