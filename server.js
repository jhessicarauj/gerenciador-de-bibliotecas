const express = require('express')

const app = express()

app.use((err, req, res, next) => {
    console.arror(err.stack);
    res.status(500).send("Algo deu errado!")
})

const PORT = 3333

app.listen(PORT,() =>{
    console.log(`servidor rodando na porta ${PORT}`);
})
