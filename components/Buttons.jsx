"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
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

export function Bb(){
  return(
    <div style={{columnRule:"4px solid gray"}} className=" pt-4 sm:columns-2  transition-all">
            <h1 className="font-bold text-center pb-4" style={{columnSpan: "all"}}>Impression des documents :</h1>
            <div className="firstRow pl-8" >
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".AutorisationDabsence").classList.toggle("hidden")}}  >Demande D'autorisation d'absence</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".CessionReprise").classList.toggle("hidden")}}  >Demande D'attestaion De Travail</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".AnnulationDeConge").classList.toggle("hidden")}}  >Demande D'anullation de Congé</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".DemandeDeConge").classList.toggle("hidden")}}  >Demande De Bulletin De Paie</button></div>
            </div>
            <div className="secondRow pl-8">
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".DemandeRecuperation").classList.toggle("hidden")}}  >Demande De Recuperation</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".AttestationDuTravail").classList.toggle("hidden")}}  >Demande De Congé</button></div>
              <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]"><button onClick={() => {document.querySelector(".fields").classList.toggle("hidden");document.querySelector(".BulletinDePaie").classList.toggle("hidden")}}  >Cession Reprise</button></div>
            </div>
          </div>
    
  )
  

}