import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import  {Signin} from "/component/Buttons"
export default function Home() {
  
  return (
    <div>
     <Signin />
    </div>
  )
}
