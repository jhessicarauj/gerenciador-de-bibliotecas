const {Router} = require("express")
const BookController = require("../controllers/BookController")

const checkBookExists = require("../middlewares/CheckBookExists")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/", bookController.createBook)

bookRoutes.get("/", bookController.listbook)
bookRoutes.get("/:id", checkBookExists, bookController.listBookByld)

bookRoutes.put("/:id", checkBookExists, bookController.updateBook)

bookRoutes.patch("/:id", checkBookExists, bookController.updateBookStatus)

bookRoutes.delete("/:id", checkBookExists, bookController.deleteBook)

module.exports = bookRoutes