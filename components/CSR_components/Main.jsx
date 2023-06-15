"use client"

import AutorisationDabsence from "@/components/Impression_des_documents/AutorisationDabsence";
import CessionReprise from "@/components/Impression_des_documents/CessionReprise";
import AnnulationDeConge from "@/components/Impression_des_documents/AnnulationDeConge";
import DemandeDeConge from "@/components/Impression_des_documents/DemandeDeConge";
import DemandeRecuperation from "@/components/Impression_des_documents/DemandeRecuperation";
import AttestationDeTravail from "@/components/Impression_des_documents/AttestationDeTravail";
import BulletinDePaie from "@/components/Impression_des_documents/BulletinDePaie";
import { useState } from "react";
export default function Main() {
  const [documentsComponents,setDocumentsComponents] = useState({
    CessionReprise: false,
    AnnulationDeConge: false,
    AutorisationDabsence: false,
    DemandeDeConge: false,
    DemandeRecuperation: false,
    AttestationDeTravail: false,
    BulletinDePaie: false,
  })
  return (
    <div>
     

      {/* Start impression des document Card  */}
      <div className="border relative left-[50%] translate-x-[-50%] border-black w-11/12 py-2 px-2 bg-gradient-to-r from-blue-50 to-transparent mt-4 rounded-lg">
        <div
          style={{ columnRule: "4px solid gray" }}
          className=" pt-4 sm:columns-2  transition-all"
        >
          <h1
            className="font-bold text-center pb-4"
            style={{ columnSpan: "all" }}
          >
            Impression des documents :
          </h1>
          <div className="firstRow pl-8">
            <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,AutorisationDabsence:true}))
                }}
              >
                Demande D'autorisation d'absence
              </button>
            </div>
            <div className="checked:text-red-500 font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,AttestationDeTravail:true}))
                }}
              >
                Demande D'attestaion De Travail
              </button>
            </div>
            <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,AnnulationDeConge:true}))
                }}
              >
                Demande D'anullation de Congé
              </button>
            </div>
            <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,BulletinDePaie:true}))
                }}
              >
                Demande De Bulletin De Paie
              </button>
            </div>
          </div>
          <div className="secondRow pl-8">
            <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,DemandeRecuperation:true}))
                }}
              >
                Demande De Recuperation
              </button>
            </div>
            <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,DemandeDeConge:true}))
                }}
              >
                Demande De Congé
              </button>
            </div>
            <div className="font-medium hover:text-blue-500 border-b hover:border-blue-500 w-fit pb-[-3px]">
              <button
                onClick={() => {
                  setDocumentsComponents(obj => ({...obj,CessionReprise:true}))
                }}
              >
                Cession Reprise
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="CessionReprise  ">
          {documentsComponents.CessionReprise && <CessionReprise handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,CessionReprise: false}))}} /> }
        </div>
        <div className="AnnulationDeConge  ">
          {documentsComponents.AnnulationDeConge && <AnnulationDeConge handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,AnnulationDeConge: false}))}} /> }
        </div>
        <div className="AutorisationDabsence  ">
          {documentsComponents.AutorisationDabsence && <AutorisationDabsence handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,AutorisationDabsence: false}))}} /> }
        </div>
        <div className="DemandeDeConge  ">
          {documentsComponents.DemandeDeConge && <DemandeDeConge handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,DemandeDeConge: false}))}} /> }
        </div>
        <div className="DemandeRecuperation  ">
          {documentsComponents.DemandeRecuperation && <DemandeRecuperation handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,DemandeRecuperation: false}))}} /> }
        </div>
        <div className="AttestationDuTravail  ">
          {documentsComponents.AttestationDeTravail && <AttestationDeTravail handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,AttestationDeTravail: false}))}} /> }
        </div>
        <div className="BulletinDePaie  ">
          {documentsComponents.BulletinDePaie && <BulletinDePaie handleDocumentsComponents={()=>{setDocumentsComponents(obj=>({...obj,BulletinDePaie: false}))}} /> }
        </div>
      {/* End impression des document Card  */}

      {/*  Guide de formation  */}
      {/*  Guide de formation  */}
    </div>
  );
}
