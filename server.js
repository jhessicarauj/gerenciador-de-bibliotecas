const express = require('express')
const {v4:uuidV4} = require('uuid')

const app = express()

app.use(express.json())

const users = [];
const books = [];

app.post("/usuario", (req, res) => {
    const { name } = req.body;
    const { username } = req.body;
    const { email } = req.body;
    const { telefone } = req.body;

    const userAlreadyExists = users.some(user => user.username === username)

    if(userAlreadyExists) {
        return res.status(400).json("Usuario já cadastrado!")
    }

    const user = {
        id: uuidV4(),
        name,
        email,
        created_at: new Date(),
        telefone,
        emprestimos: []

    }
    
    users.push(user)

    res.status(201).json(user)
})

app.get("/usuario", (req, res) => {
    res.status(200).json(users)
})

app.post("/book", (req, res) => {
    const {titulo, autor, paginas, categoria} = req.body

    const book = {
        id: uuidV4(),
        titulo,
        autor,
        paginas,
        categoria,
        disponibilidade: true,
    }

    books.push(book)

    res.status(201).json(book)
})

app.get("/book", (req, res) => {
    return res.status(200).json(books)
})


app.patch("/emprestimo/id_book", (req, res) => {
    const {id_book} = req.params;

    const {nome} = req;
    const user = users.find(user => user.nome === nome)
    
    if(!user) {
        return res.status(400).json("usuario não encontrado")
    }

    req.user = user

    const book = books.find(book => book.id === id_book)

    const limit = user.emprestimos.length <= 3
    console.log(limit)

    if(user.emprestimos.length > limit) {
        return res.status(400).json("limite excedido!")
    }

    if(book.disponibilidade === true) {
        user.emprestimos.push(book)
        book.disponibilidade = false
    } else {
        res.status(400).json("livro indisponivel!")
    }
     console.log(books)

     return res.status(200).json("emprétimo realizado com sucesso!")

})

app.patch("/devolucao/:id_book", (req, res) => {
    const {id_book} = req.params;

    const {nome} = req;
    const user = users.find(user => user.nome === nome)

    if(!user) {
        return res.status(400).json("usuario não encontrado!")
        
    }

    req.user =  users

    const book = books.find(book => book.id === id_book)

    if(!book) {
        return res.status(400).json("livro não encontrado")
    }

    const indexBook = user.emprestimos.findIndex(book => book.id === id_book)
    console.log(indexBook)

    if(indexBook === -1) {
        return res.status(400).json("você não tem o livro na lista de emprestimos!")
    }

    user.emprestimos.splice(indexBook, 1)
    book.disponibilidade = true

    console.log(user.emprestimos.length === 0)

    return res.status(200).json("Devolucao realizada! lirvo disponivel novamente")
    
})

app.get("/books/consulta", (req, res) => {
    const {titulo, autor, categoria} = req.query
    if(titulo) {
        result = book.filter(book => book.titulo.includes(titulo))
    }
    if(autor) {
        result = book.filter(book => book.titulo.includes(autor))
    }
    if(categoria) {
        result = book.filter(book => book.titulo.includes(categoria))
    }

    return res.status(200).json(result)
})




app.use((err, req, res, next) => {
    console.arror(err.stack);
    res.status(500).send("Algo deu errado!")
})

const PORT = 3333

app.listen(PORT,() =>{
    console.log(`servidor rodando na porta ${PORT}`);
})
