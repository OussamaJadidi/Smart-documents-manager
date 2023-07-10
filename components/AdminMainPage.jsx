"use client"
import { Employee } from "@/app/Admin/page";
import React, { useEffect, useRef, useState } from "react";


export default function AdminMainPage({ users }) {
  const [isFiltred, setIsFiltred] = useState(false);
  const [user, setUser] = useState({
    id: "",
    nom: "",
    prenom: "",
    option: "",
    gender: "",
    img: "",
  });
  const searcheBar = useRef();
  const allUsers = users.map((user) => {
    if (user.nom == "admin" && user.prenom == "admin") return;
    return (
      <Employee
        key={user.Id_user}
        id={user.Id_user}
        nom={user.nom}
        prenom={user.prenom}
        option={user.option}
        gender={user.sexe}
        img={user.img}
      />
    );
  });
  let displayStyle;
  let alldataDislpay;
  if (isFiltred == false) {
    displayStyle = "hidden";
    alldataDislpay="block"
  } else {
    displayStyle = "block";
    alldataDislpay = "hidden";
  }
  return (
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bonjour Admin
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Cliquez sur n’importe qui et accédez à son profil pour modifier ses
          informations !
        </p>
        <div>
          <div>
            <h2 className="my-1 font-satoshi font-semibold text-gray-900 ">
              Searcher un profil :
            </h2>
            <div className="flex items-stretch">
              <input
                list="names"
                id="profil"
                placeholder="Nom de profil"
                ref={searcheBar}
                className=" inline-block indent-4 w-48 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={() => {
                  if (
                    users.some(
                      (user) =>
                        searcheBar.current.value == `${user.nom} ${user.prenom}`
                    ) && searcheBar.current.value !== `admin admin`
                  ) {
                    setIsFiltred(true);

                    setUser(
                      users.find(
                        (user) =>
                          searcheBar.current.value ==
                          `${user.nom} ${user.prenom}`
                      )
                    );
                  } else {
                    setIsFiltred(false);
                  }
                }}
              />
              <datalist id="names">
                {users.map((user) => {
                    if(user.nom =="admin" && user.prenom=="admin") return
                  return (
                    <option
                      key={user.Id_user}
                      value={`${user.nom} ${user.prenom}`}
                    >
                      {user.Id_user}
                    </option>
                  );
                })}
              </datalist>
              <button className="bg-blue-600 hover:bg-blue-500 ml-2 rounded-md px-4 py-2 text-white font-mono">
                Searcher
              </button>
            </div>
          </div>
          <div className={`${displayStyle}  mt-4 border relative left-[1/2] translate-x-[-1/2]`} >
            <Employee
              key={user.Id_user}
              id={user.Id_user}
              nom={user.nom}
              prenom={user.prenom}
              option={user.option}
              gender={user.sexe}
              img={user.img}
            />
          </div>
        </div>
      </div>
      <ul className={`${alldataDislpay} grid gap-x-8 gap-y-8  sm:grid-cols-2 sm:gap-y-16 xl:col-span-2`}>
        {allUsers}
      </ul>
    </div>
  );
}
