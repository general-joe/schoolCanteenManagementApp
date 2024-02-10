/// using the prisma client as a util and exporting to our other modules

const { PrismaClient } = require ('@prisma/client')
const prisma = new PrismaClient()



module.exports = prisma;