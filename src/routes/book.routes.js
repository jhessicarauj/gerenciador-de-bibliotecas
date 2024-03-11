const {Router} = require("express")
const BookController = require("../controllers/BookController")

const checkBookExists = require("../middlewares/CheckBookExists")
const checkUserExists = require("../middlewares/CheckUserExists")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books/:user_id", checkUserExists, bookController.createBook)

bookRoutes.get("/books", bookController.listbook)
bookRoutes.get("/books/:id", checkBookExists, bookController.listBookByld)

bookRoutes.put("/books/:id", checkBookExists, bookController.updateTask)

bookRoutes.patch("/books/:id", checkBookExists, bookController.updateBookStatus)

bookController.deleteBook("/books/:id", checkBookExists, bookController.deleteBook)

module.exports = bookRoutes