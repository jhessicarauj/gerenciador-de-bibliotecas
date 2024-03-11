const knex = require("../database/knex")

async function checkBookExists(req, res, next) {
    const {id} = req.params
    const book = await knex("book").where({id})
    
    if(!book) {
        return res.status(400).json("Tarefa não encontrada")
    }
    next()
}

module.exports = checkBookExists