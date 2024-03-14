const {Router} = require("express")
const bookRoutes = require("./book.routes")
const userRoutes = require("./users.routes")
const loansRoutes = require("./loans.routes")
const routes = Router()

routes.use("/", bookRoutes)
routes.use("/", userRoutes)
routes.use("/", loansRoutes)

module.exports = routes