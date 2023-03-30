const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    res.render('index', {name: 'Javier Aponte'})
})

app.listen(port, () => {
    console.log(`Servidor iniciado en: http//localhost:${port}`)
})