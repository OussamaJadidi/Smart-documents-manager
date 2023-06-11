"use client";
import { signIn } from "next-auth/react";
import { useState } from "react"

export default function Login({ admin = false }) {
  const [credentials, setCredentials] = useState({ nom: "", prenom: "" });

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signIn("credentials", {
      nom: credentials.nom,
      prenom: credentials.prenom,
      redirect: false
    })
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-24 w-auto"
          src="/assets/icons/chu.jpg"
          alt="CHU logo"
        />
        {admin ? (
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez-vous au compte Admin
          </h2>
        ) : (
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez-vous à votre compte
          </h2>
        )}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <htmlForm className="space-y-6" action="#" method="POST">
          <>
            <div>
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
                    setCredentials({ ...credentials, prenom: e.target.value });
                  }}
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
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
              <div className="text-sm text-end">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Identifiants oubliés?
                </a>
              </div>
            </div>
          </>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Se connnecter
            </button>
          </div>
        </htmlForm>

        {!admin && (
          <p className="mt-10 text-center text-sm text-gray-500">
            Pas un membre?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Ajouter mon compte
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
