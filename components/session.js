"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function session() {
    const {data: session}  = useSession();
      return session
    
 
}
