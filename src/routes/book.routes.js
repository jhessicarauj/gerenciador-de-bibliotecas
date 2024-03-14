const {Router} = require("express")
const BookController = require("../controllers/BookController")

const checkBookExists = require("../middlewares/CheckBookExists")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books", bookController.createBook)

bookRoutes.get("/books", bookController.listbook)
bookRoutes.get("/books/:id", checkBookExists, bookController.listBookByld)

bookRoutes.put("/books/:id", checkBookExists, bookController.updateBook)

bookRoutes.patch("/books/:id", checkBookExists, bookController.updateBookStatus)

bookRoutes.delete("/:id", checkBookExists, bookController.deleteBook)

module.exports = bookRoutes