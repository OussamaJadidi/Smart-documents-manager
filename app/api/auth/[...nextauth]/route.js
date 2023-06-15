import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { disconnect } from "process";
import useImage from "use-image";
export const authOptions ={
  session: {
    strategy: "jwt",
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
        if (!credentials?.nom || !credentials?.prenom) {
          return null;
        }

        const prisma = new PrismaClient();
        const user = await prisma.users.findUnique({
          where: {
            nom_prenom: {
              nom: credentials.nom,
              prenom: credentials.prenom,
            },
          },
        });
        const disconnect = await prisma.$disconnect();

        if (!user) return null;

        return {
          id: user.Id_user,
          name: user.nom,
          prenom: user.prenom,
          email: user.email,
          ppr: user.ppr,
          cnt: user.cnt,
          cin: user.cin,
          grade: user.grade,
          echelle: user.echelle,
          echelon: user.echelon,
          service: user.service,
          option: user.option,
          adresse: user.adresse,
          sexe: user.sexe,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          prenom: user.prenom,
          imageURL: user.imageURL,
          ppr: user.ppr,
          cnt: user.cnt,
          cin: user.cin,
          grade: user.grade,
          echelle: user.echelle,
          echelon: user.echelon,
          service: user.service,
          option: user.option,
          adresse: user.adresse,
          sexe: user.sexe,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          prenom: token.prenom,
          imageURL: token.imageURL,
          ppr: token.ppr,
          cnt: token.cnt,
          cin: token.cin,
          grade: token.grade,
          echelle: token.echelle,
          echelon: token.echelon,
          service: token.service,
          option: token.option,
          adresse: token.adresse,
          sexe: token.sexe,
          role: token.role,
        },
      };
      return session;
    },
  },
};
const handler =NextAuth(authOptions);
export { handler as GET, handler as POST}