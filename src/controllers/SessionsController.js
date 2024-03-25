const { compare } = require('bcryptjs');
const knex = require('../database/knex')
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');
const { sign } = require('jsonwebtoken');
class SessionsController {
    async create(req, res) {
        const {email, password} = req.body;

        const user = await knex("users").where({email}).first()
    }
}