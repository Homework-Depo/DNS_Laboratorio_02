
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const classes = await prisma.classes.create({
        data: {
            name: 'Diseño de Soluciones en la Nube',
            teacher: 'Jaime Farfan',
            classroom: 707
        },
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })