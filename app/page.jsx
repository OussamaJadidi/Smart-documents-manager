"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  var { data: session, status } = useSession();

  if (status === "loading") {
    return (
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
    );
  }

  if (status === "authenticated") {
    if (session.user.role === "Basic") {
      redirect("/Homme");
    } else {
      redirect("/Admin");
    }
  } else {
    redirect("/login");
  }
}
