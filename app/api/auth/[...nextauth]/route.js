import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"


const handler = NextAuth({//authOptions
     // Configure one or more authentication providers
     database: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        port: 3306,
        username: 'nextauth',
        password: 'P@ssw0rdofroot',
        database: 'data&credentials_of_users',
      },
    } ,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    
    // ...add more providers here
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          nom: { label: "Username", type: "text", placeholder: "oussama" },
          prenom: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const db = await new MySQLConnection({
            host: 'localhost',
            database: 'data&credentials_of_users',
            user: 'nextauth',
            password: 'P@sswordofroot',
          });
          
          const user = await db.users.findOne({
            where: {
              nom: credentials.username,
              prenom: credentials.password,
            },
          });
        
          return user;
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
  pages:{
    signIn:"/login",
    newUser: "/register"
    // error: "",
    // signOut: ""
  },
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