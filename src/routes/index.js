const {Router} = require("express")
const bookRoutes = require("./book.routes")
const userRoutes = require("./users.routes")
const loansRoutes = require("./loans.routes")
const routes = Router()

routes.use("/books", bookRoutes)
routes.use("/users", userRoutes)
routes.use("/loans", loansRoutes)

module.exports = routes