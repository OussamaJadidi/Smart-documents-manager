import { PrismaClient} from "@prisma/client"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({//authOptions
   
  providers: [
    
    CredentialsProvider({
        name: 'Credentials',
      
        credentials: {
          prenom: { label: "Prénom", type: "text", placeholder: "Prénom" },
          nom: { label: "Nom", type: "password" }
        },
        async authorize(credentials, req) {
          
          if(!credentials?.nom || !credentials?.prenom) {
            return null
          }
          const prisma = new PrismaClient()

          
          const user = await prisma.users.findFirstOrThrow({
            where : {
                prenom: credentials.prenom
            }
        })
          // console.log("users => ",user)
          // if(!user) return null
          if(user.nom === credentials.nom){
            return {
              nom: "user.nom",
              prenom: "user.prenom"
            }
          }
          
          
        }
    }),
   
    // typeorm({
    //   driver: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'nextauth',
    //   password: 'P@ssw0rdofroot',
    //   database: 'data&credentials_of_users',
    // }),
  ],
  // pages:{
  //   signIn:"/login",
  //   newUser: "/register"
  //   // error: "",
  //   // signOut: ""
  // },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  },
   
})

export { handler as GET, handler as POST }