import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session:{
    strategy: 'jwt'
  },
  //authOptions
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        prenom: { label: "Prénom", type: "text", placeholder: "Prénom" },
        nom: { label: "Nom", type: "password" },
      },
      async authorize(credentials) {
        // if (!credentials?.nom || !credentials?.prenom) {
        //   return null;
        // }

        // const prisma = new PrismaClient();
        // const user= await prisma.users.findUnique({
        //   where: {
        //     nom_prenom:{
        //       nom: credentials.nom,
        //       prenom: credentials.prenom
        //     }
        //   },
        // })
        // if (!user) return null;
        // console.log("here is the user",user)
        const user = { id:11,nom: "oussama", prenom: "jadidi", age:22}
        return user
      },
    }),
  ],
 
});

export { handler as GET, handler as POST };
