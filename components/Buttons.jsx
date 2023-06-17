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

export function SignoutLg(){
  return(
    <button className='flex bg-blue-700 rounded-md text-white px-4 py-2 font-medium hover:scale-95 hover:shadow hover:shadow-blue-500 transition-transform' onClick={handleSignOut}>Se deconnecter</button>
  )
}
export function SignoutSm(){
  return(
    <li className='hover:text-blue-700 hover:font-semibold ml-2 mb-1 border-b-2 ' onClick={handleSignOut}><button>Se deconnecter</button></li>
    )
}

async function handleSignOut() {

  const res = await signOut( {
    callbackUrl: "/login" 
  })
}