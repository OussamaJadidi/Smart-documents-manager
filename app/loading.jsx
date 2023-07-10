import React from "react";

export default function loading() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-screen ">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
        <div className="text-black font-roboto font-semibold pt-2">
          merci pour votre patience
        </div>
      </div>
    </div>
  );
}
