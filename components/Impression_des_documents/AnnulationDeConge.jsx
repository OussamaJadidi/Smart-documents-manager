import Template from "./Template";
import { useState } from "react";
import { saveAs } from "file-saver";
import { useSession } from "next-auth/react";
const Docxtemplater = require("docxtemplater");

export default function AnnulationDeConge({ handleDocumentsComponents }) {
  const [data, setData] = useState({ dateDebut: "", dateFin: "" });
  let { data: session, status } = useSession();

  async function handle(e) {
    e.preventDefault();
    if (status === "authenticated") {
      await generateModifiedDocument(session, data);
    }
  }

  return (
    <Template
      handleDocumentsComponents={handleDocumentsComponents}
      title="Demande D'annulation de Congé"
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="w-10/12">
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
        <div className="w-10/12">
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
      <button onClick={handle}>Telecharger</button>
    </Template>
  );
}

async function generateModifiedDocument(session, data) {
  const templateUrl = "../../documents/DemandeDAnnulationDeCongé.docx";
  const templateContent = await fetch(templateUrl).then((response) => response.blob());

  const doc = new Docxtemplater();
  doc.load(templateContent);

  const { name, prenom, service, ppr } = session;
  const { dateDebut, dateFin } = data;

  const modifiedData = {
    nom: name,
    prenom,
    grade: service,
    service,
    ppr_cnt: ppr,
    dateDeDebut: dateDebut,
    nombreDesJours: dateFin - dateDebut,
  };

  doc.setData(modifiedData);
  doc.render();

  const modifiedContent = doc.getZip().generate({ type: "blob" });

  saveAs(modifiedContent, "ModifiedDemandeDAnnulationDeCongé.docx");
}
