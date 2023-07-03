import React from "react";
import Template from "./Template";
import { useState } from "react";
import { saveAs } from "file-saver";
import Docxtemplater from "docxtemplater";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

export default function AnnulationDeConge({ handleDocumentsComponents }) {
  const [data, setData] = useState({ dateDebut: "", dateFin: "" });
  let { data: session, status } = useSession();
  function handle(e) {
    if (status === "authenticated") {
      e.preventDefault();
      Registration(
        session.name,
        session.prenom,
        session.service,
        session.ppr,
        data.dateDebut
      );
    }
  }
  return (
    <Template
      handleDocumentsComponents={handleDocumentsComponents}
      title="Demande D'anulation de Congé"
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className=" w-10/12">
          <span className="font-medium">La date du :</span>
          <span>
            <input
              type="date"
              value={data.dateDebut}
              onChange={(e) => {
                setData((data) => ({ ...data, dateDebut: e.target.value }));
              }}
              className="firs py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center"
            />
          </span>
        </div>
        <div className=" w-10/12">
          <span className="font-medium">La date au :</span>
          <span>
            <input
              type="date"
              value={data.dateFin}
              onChange={(e) => {
                setData((data) => ({ ...data, dateFin: e.target.value }));
              }}
              className="secon py-[-3px] border-0 border-b focus:border-transparent  border-black  focus:ring-0 placeholder:text-center"
            />
          </span>
        </div>
      </div>
      <button onClick={handle}>telecharger</button>
      {/* <a download href="/documents/Demande-dAnnulation-de-conge.docx">telecharger</a> */}
    </Template>
  );
}

async function Registration(nom, prenom, grade, service, ppr, dateDeDebut) {
  // Load the template Word document
  const templateUrl = "/documents/DemandeDAnnulationDeCongé.docx";
  const templateContent = await fetch(templateUrl).then((response) =>
    response.blob()
  );

  // Create a new Docxtemplater instance
  const doc = new Docxtemplater();
  doc.loadZip(new JSZip(templateContent));

  // Set the data in the Word document
  doc.setData({
    nom: nom,
    prenom: prenom,
    grade: grade,
    service: service,
    ppr_cnt: ppr,
    dateDeDebut: dateDeDebut,
    nombreDesJours: 11,
  });

  try {
    // Render the document with the data
    doc.render();
    const editedContent = doc.getZip().generate({ type: "nodebuffer" });

    // Save the edited document
    saveAs(editedContent, "edited_document.docx");
  } catch (error) {
    console.error("Error generating document:", error);
  }
}
