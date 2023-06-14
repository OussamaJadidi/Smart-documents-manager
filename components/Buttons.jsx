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
