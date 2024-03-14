const {Router} = require("express")
const BookController = require("../controllers/BookController")

const checkBookExists = require("../middlewares/CheckBookExists")
const checkUserExists = require("../middlewares/CheckUserExists")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/:user_id", checkUserExists, bookController.createBook)

bookRoutes.get("/", bookController.listbook)
bookRoutes.get("/:id", checkBookExists, bookController.listBookByld)

bookRoutes.put("/:id", checkBookExists, bookController.updateBook)

bookRoutes.patch("/books/:id", checkBookExists, bookController.updateBookStatus)

bookRoutes.delete("/:id", checkBookExists, bookController.deleteBook)

module.exports = bookRoutes