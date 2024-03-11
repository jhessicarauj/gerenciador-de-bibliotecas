const {Router} = require("express")
const bookRoutes = require("./book.routes")
const userRoutes = require("./users.routes")
const routes = Router()

routes.use("/", bookRoutes)
routes.use("/", userRoutes)

module.exports = routes