const knex = require("../database/knex")

class BookController {
    async createBook(req, res) {
        const {id} = req.params
        const {titulo , autor, categoria} = req.body

        const book = {
            titulo,
            autor,
            categoria,
            created_at: `${new Date()}`,
            updated_at: `${new Date()}`,
            disponibilidade: true,
            id
        }

        await knex("books").insert({titulo: book.titulo, autor: book.autor, categoria: book.categoria, disponibilidade: book.disponibilidade, created_at: book.created_at, updated_at: book.updated_at})
        
        return res.status(201).json("Livro criado com sucesso")
    }

    async listbook(req, res) {
        const [books] = await knex("books")

        return res.status(200).json(books)

    }

    async listBookByld(req, res) {
        const {id} = req.params
        const [book] = await knex("books").where({id})

         return res.status(200).json(book)

    }

    async updateBook(req, res) {
        const {id} = req.params
        const {titulo, categoria} = req.body

        const newBook = await knex("books").where({id}).update({titulo, categoria})

        return res.status(200).json("Registro atualizado com sucesso!")
    }

    async updateBookStatus(req, res) {
        const {id} = req.params
        
        await knex("books").where({id}).update({disponibilidade: true})

        return res.status(200).json("Status atualizado com sucesso!")

    }

    async deleteBook (req, res) {
        const {id} = req.params
        await knex("books").where({id}).delete()

        return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = BookController