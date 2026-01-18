// import { PrismaClient } from "@prisma/client"
 
// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
// export const db = globalForPrisma.prisma || new PrismaClient()
 
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db




// import { PrismaClient } from "@prisma/client"

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const db =
//   globalForPrisma.prisma ||
//   new PrismaClient() // just this, no adapter

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db



// import { PrismaClient } from "@prisma/client"

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const db =
//   globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db
// }








// import { PrismaClient } from "@prisma/client"

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const db =
//   globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db
// }




import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db
}
