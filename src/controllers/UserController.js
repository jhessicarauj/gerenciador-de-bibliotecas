const knex = require("../database/knex")

class UserController {
    async createUser(req, res) {
        const {name, username, email, telefone, password} = req.body
        


        await knex("users").insert({name, username, email, telefone, password})

        return res.status(201).json("Usuario cadastrado com sucesso!!")
    }

    async listUsers(req, res) {
        const users = await knex("users")

        return res.status(200).json(users)
    }

    async listUsersByld(req, res) {
        const {user_id} = req.params
        const user = await knex("users").where({id:user_id})

        return res.status(200).json(user)
    }

    async updateUser(req, res) {
        const {user_id} = req.params
        const {name, email} = req.body

        await knex("users").where({id:user_id}).update({name, email})

        return res.status(200).json("Usuario atualizado com sucesso!")
    }

    async updateUserAdmin(req, res) {
        const {user_id} = req.params

        await knex("users").where({id:user_id}).update({isAdmin:true})
        return res.status(200).json("Usuario agora e um administrador!")
    }

    async deleteUser(req, res) {
        const {user_id} = req.params

        await knex ("users").where({id:user_id}).delete({id:user_id})

        return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = UserController