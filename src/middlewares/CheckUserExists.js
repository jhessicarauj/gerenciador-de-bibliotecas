const kenx = require("../database/knex")


async function checkUserExists(req, res, next) {
    const {user_id} = req.params
    const [user] = await kenx("users").where({id:user_id})
    
    if(!user) {
        return res.status(400).json("Usuario não encontrado")
    }

    next()
}

module.exports = checkUserExists
