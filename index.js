const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const port = 3000;

app.set('view engine', 'ejs'); 

app.get('/', async (req, res) => {

    const classes = await prisma.classes.findMany()

    res.render('index', {name: 'Javier Aponte', classes: classes})
})

app.listen(port, () => {
    console.log(`Servidor iniciado en: http//localhost:${port}`)
})