"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function RegistrationPage({
  _nom = "",
  _prenom = "",
  _email = "",
  _ppr_cnt = undefined,
  _cin = "",
  _grade = undefined,
  _echelle = undefined,
  _echelon = undefined,
  _service = "",
  _option = "",
  _adresse = "",
  _sexe = "",
  _photo = undefined,
   typeRegistration,
}) {
  const [credentials, setCredentials] = useState({
    nom: _nom,
    prenom: _prenom,
    email: _email,
    ppr_cnt: _ppr_cnt,
    cin: _cin,
    grade: _grade,
    echelle: _echelle,
    echelon: _echelon,
    service: _service,
    option: _option,
    adresse: _adresse,
    sexe: _sexe,
    photo: _photo,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    // if you are create a user
    if (typeRegistration == "creation") {
      try {
        const response = await fetch("/api/createUser", {
          method: "POST",
          body: JSON.stringify(credentials),
        });

        if (response.ok) {
          const data = await response.json();
          toast.success("User registered successfully");
          // Handle the successful registration and redirect or perform other actions
          window.location.href = "/login";
        } else {
          const errorResponse = await response.json();
          toast.error(errorResponse.error);
          // Handle the error response from the API
        }
      } catch (error) {
        console.log("An error occurred:", error);
        toast.error("An error occurred while registering");
        // Handle any other unexpected errors
      }
    }

    // if you are modify a user
    if (typeRegistration == "modification") {
      try {
        const response = await fetch("/api/createUser", {
          method: "POST",
          body: JSON.stringify(credentials),
        });

        if (response.ok) {
          const data = await response.json();
          toast.success("User registered successfully");
          // Handle the successful registration and redirect or perform other actions
          window.location.href = "/login";
        } else {
          const errorResponse = await response.json();
          toast.error(errorResponse.error);
          // Handle the error response from the API
        }
      } catch (error) {
        console.log("An error occurred:", error);
        toast.error("An error occurred while registering");
        // Handle any other unexpected errors
      }
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-24 w-auto"
          src="/assets/icons/chu.jpg"
          alt="CHU logo"
        />

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {typeRegistration == "creation" ? "Créer votre " : "Modifier le "}compte
        </h2>
      </div>

      <div className="mt-10 mx-auto sm:w-full  w-10/12 overflow-hidden">
        <form className="space-y-6" action="#" method="POST">
          <div className="sm:flex sm:justify-between sm:flex-grow sm:gap-2">
            <div className="sm:w-1/2">
              <label
                htmlFor="prenom"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2">
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  value={credentials.prenom}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      prenom: e.target.value,
                    });
                  }}
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <label
                htmlFor="nom"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={credentials.nom}
                  onChange={(e) => {
                    setCredentials({ ...credentials, nom: e.target.value });
                  }}
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={credentials.email}
                  onChange={(e) => {
                    setCredentials({ ...credentials, email: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="cin"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CIN
              </label>
              <div className="mt-2">
                <input
                  id="cin"
                  name="cin"
                  type="text"
                  value={credentials.cin}
                  onChange={(e) => {
                    setCredentials({ ...credentials, cin: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="ppr_cnt"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                P.P.R/C.N.T
              </label>
              <div className="mt-2">
                <input
                  id="ppr-cnt"
                  name="ppr-cnt"
                  type="text"
                  value={credentials.ppr_cnt}
                  onChange={(e) => {
                    setCredentials({ ...credentials, ppr_cnt: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="grade"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Grade
              </label>
              <div className="mt-2">
                <input
                  id="grade"
                  name="grade"
                  type="text"
                  value={credentials.grade}
                  onChange={(e) => {
                    setCredentials({ ...credentials, grade: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="echelle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Echelle
                </label>
                <div className="mt-2">
                  <input
                    id="echelle"
                    name="echelle"
                    type="text"
                    value={credentials.echelle}
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        echelle: e.target.value,
                      });
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <label
                htmlFor="echelon"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Echelon
              </label>
              <div className="mt-2">
                <input
                  id="echelon"
                  name="echelon"
                  type="text"
                  value={credentials.echelon}
                  onChange={(e) => {
                    setCredentials({ ...credentials, echelon: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="service"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service
              </label>
              <div className="mt-2">
                <input
                  id="service"
                  name="service"
                  type="text"
                  value={credentials.service}
                  onChange={(e) => {
                    setCredentials({ ...credentials, service: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="option"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Option
              </label>
              <div className="mt-2">
                <input
                  id="option"
                  name="option"
                  type="text"
                  value={credentials.option}
                  onChange={(e) => {
                    setCredentials({ ...credentials, option: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="adresse"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresse
              </label>
              <div className="mt-2">
                <input
                  id="adresse"
                  name="adresse"
                  type="text"
                  value={credentials.adresse}
                  onChange={(e) => {
                    setCredentials({ ...credentials, adresse: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="sexe"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sexe
              </label>
              <div className="mt-2">
                <input
                  id="Sexe"
                  name="Sexe"
                  type="text"
                  value={credentials.sexe}
                  onChange={(e) => {
                    setCredentials({ ...credentials, sexe: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2">
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setCredentials({
                      ...credentials,
                      photo: e.target.files[0],
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-[16rem] relative left-1/2 translate-x-[-50%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              {typeRegistration =="creation" ? "Register" : "Modifier"}
            </button>
          </div>
        </form>

        <span >
          {typeRegistration === "creation" ? (
            <p className="mt-4 text-center text-sm text-gray-500">
              Déja membre?
              <Link
                href="/login"
                className="font-semibold pl-1 leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Se connecter
              </Link>
            </p>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
}
