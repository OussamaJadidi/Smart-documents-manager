"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Session() {
    const {data: session}  = useSession();
    console.log(session)
  return (
    <div>
        {JSON.stringify(session)}
    </div>
  )
}
