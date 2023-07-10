"use client";
import swal from "sweetalert";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
export default function Signin() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <button onClick={signOut}>SignOut </button>
          <h1>{JSON.stringify(session)}</h1>
        </div>
      ) : (
        <button onClick={signIn}>SignIn</button>
      )}
    </div>
  );
}

export function SignoutLg() {
  return (
    <button
      className="flex bg-blue-700 rounded-md text-white px-4 py-2 font-medium hover:scale-95 hover:shadow hover:shadow-blue-500 transition-transform"
      onClick={handleSignOut}
    >
      Se deconnecter
    </button>
  );
}
export function SignoutSm() {
  return (
    <li
      className="hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 "
      onClick={handleSignOut}
    >
      <button>Se deconnecter</button>
    </li>
  );
}

async function handleSignOut() {
  const res = await signOut({
    callbackUrl: "/login",
  });
}
export function DeleteUserButton({ id }) {
  return (
    <button
      title="Supprimer ce compte"
      className=" w-fit bg-transparent hover:bg-red-200 h-10 px-2  hover:border hover:border-black rounded-md relative   font-medium flex items-center overflow-ellipsis"
      onClick={() => deleteUser(id)}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
async function deleteUser(id) {
  swal("Êtes-vous sûr de vouloir supprimer cet utilisateur?", {
    buttons: ["Non", "Oui, Je suis sure"],
  }).then(async (value) => {
    if (value === true) {
      const response = await fetch(`/api/deleteUser/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        toast.success("User deleted successfully");
      } else {
        toast.error("User Not deleted yet,somthing went wrong");
        // Handle the error response from the API
      }
    } else {
    }
  });
}

export function ModifyUser() {
  return (
    <>
      <button
        title="modifier informations"
        className=" w-fit bg-transparent hover:bg-green-100 h-10 px-2  hover:border hover:border-black rounded-md relative   font-medium flex items-center overflow-ellipsis"
        onClick={() => {
          toast("Chargement de la page...");
        }}
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
    </>
  );
}

