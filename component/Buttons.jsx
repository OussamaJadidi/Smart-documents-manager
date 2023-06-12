"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export function Signin() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <button onClick={signOut}>SignOut </button>
          <h1>{JSON.stringify(session)}</h1>
          <img src={session.user.image} width="300" height="300"/>
        </div>
      ) : (
        <button onClick={signIn}>SignI</button>
      )}
    </div>
  );
}
