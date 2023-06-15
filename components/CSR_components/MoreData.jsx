"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faChevronDown,
 } from "@fortawesome/free-solid-svg-icons";

export default function MoreData() {
  const [fullInformations, setFullInformations] = useState(false)
  return (
    <button className=" text-gray-400 border-gray-400 underline text-sm relative left-[50%] translate-x-[-50%]"
            onClick={() => {
              document.querySelector(".moreData").classList.toggle("hidden")
              document.querySelector(".downIcon").classList.toggle("rotate-180")
              setFullInformations(!fullInformations)
            }}        
          >{fullInformations ? "Moins" : "Plus"} d'infomations <FontAwesomeIcon className="downIcon" icon={faChevronDown} style={{fontSize: ".8rem"}} />
    </button>
  )
}
