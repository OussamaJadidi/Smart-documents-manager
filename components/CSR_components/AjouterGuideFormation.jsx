"use client"
import { useState } from "react";

export default function AjouterGuideFormation() {
  const [file,setFile] = useState({title:"",content:null})
  function handleSubmit(e){
    e.preventDefault();
    try{
      const response = fetch("api/addDocument",{
        method: "POST",
        body: JSON.stringify(file)
      })
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div id="guideDesFormations">
      {/* Start Guide de formation  */}
      <div className="border relative left-[50%] translate-x-[-50%] border-black w-11/12 py-6 px-10 bg-gradient-to-r from-blue-50 to-transparent mt-4 rounded-lg overflow-hidden">
        <h1
          className="font-bold text-center pb-4"
          style={{ columnSpan: "all" }}
        >
          Ajouter un guide de formation :
        </h1>
        <div>
          <div className="w-10/12">
            <span className="font-medium">Titre : </span>
            <span>
              <input
                type="text"
                placeholder="titre de formation"
                value={file.title}
                onChange={(e) => {
                  setFile({
                    ...file,
                    title: e.target.value,
                  });
                }}
                className="w-1/2 h-8  border-0 border-b focus:border-0 max-md:w-2/3 border-b-black bg-transparent focus:ring-0 placeholder:text-center"
              />
            </span>
          </div>
          <div className="w-10/12 ">
            <span className="font-medium pr-4">Content : </span>
            <span>
              <input
                type="file"
                accept=".docx"
                onChange={(e) => {
                  setFile({
                    ...file,
                    content: e.target.files[0],
                  });
                }}
                class="py-2   text-black  rounded text-ellipsis"
              />
            </span>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 mt-4 rounded relative left-1/2 translate-x-[-50%]" onClick={handleSubmit}>
            Ajouter
          </button>
      </div>
      {/* End Guide de formation  */}
    </div>
  );
}
