// "use client";
// import { PrismaClient } from "@prisma/client";
// import { cp } from "fs";

// const prisma = new PrismaClient();

// async function main() {
//     const user = await prisma.users.create({
//         data: {
//           nom:"nom",
//           prenom:"prenom",
//           email:"email",
//           ppr:1, 
//           cnt:11, 
//           cin:"F",
//           grade:22,
//           echelle:5,
//           echelon:8,
//           service:"sdqv",
//           option:"option",
//           adresse:"adresse",
//           sexe:"sexe",
//           // image: imageData,
//         },
//       });
// }

// main()
//   .catch((e) => console.log(e))
//   .finally(async () => await prisma.$disconnect());
