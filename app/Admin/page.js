import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import RegistrationPage from "@/components/RegistrationPage";
import { SignoutLg, SignoutSm } from '/components/Buttons'
 
export default async  function Admin() {
  
  const response = await fetch("http://localhost:3000/api/getAllUsers");
  const users = await response.json();
  
  const  allUsers = users.map((user) => {
    if (user.nom == "admin" && user.prenom == "admin") return;
    return (
      <Employee
        key={user.Id_user}
        id= {user.Id_user}
        nom={user.nom}
        prenom={user.prenom}
        option={user.option}
        gender={user.sexe}
        img={user.img}
      />
    );
  });
  return (
    <div>
      {/* Start the header  */}
      <header className = 'header font-satoshi flex justify-between items-center pr-4 ' >
        <div>
          <img src="/assets/icons/chu.jpg" alt="CHU logo" width={120} height={120} />
        </div>

        <div className='flex gap-4 items-center  '>
          
           <SignoutLg />
        </div> 
        
       
    </header>
      {/* End the header  */}
      <div className="bg-white py-8 sm:py-16" >
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bonjour Admin
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cliquez sur n’importe qui et accédez à son profil pour modifier
              ses informations !
            </p>
          </div>
          <ul
            className="grid gap-x-8 gap-y-8  sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {allUsers}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

function Employee({ id,nom, prenom, option, gender, img }) {
  return (
    <li className="border-4 border-gray rounded-md p-2 flex items-center justify-between ">
      <div
        className="flex items-center gap-x-6 cursor-pointer"
        title="voir le profile"
      >
        <img
          className="h-16 w-16 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
        <Link href = {`Admin/${id}`}>
        <button
          title="modifier informations"
          className=" w-fit bg-transparent hover:bg-green-100 h-10 px-2  hover:border hover:border-black rounded-md relative   font-medium flex items-center overflow-ellipsis"
    
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        </Link>
        <button
          title="Supprimer ce compte"
          className=" w-fit bg-transparent hover:bg-red-200 h-10 px-2  hover:border hover:border-black rounded-md relative   font-medium flex items-center overflow-ellipsis"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
