
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const classes = await prisma.classes.createMany({
        data: [{
            name: 'Diseño de Soluciones en la Nube',
            teacher: 'Jaime Farfán',
            classroom: 707
        },
        {
            name: 'Desarrollo de Web Avanzado',
            teacher: 'Jorge Castañeda',
            classroom: 816  
        },
        {
            name: 'Programación en Moviles Avanzado',
            teacher: 'Linder Hassinger',
            classroom: 701  
        }
    ] 
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