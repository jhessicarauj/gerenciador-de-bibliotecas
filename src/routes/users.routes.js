const {Router} = require("express")
const UserController = require("../controllers/UserController")
const checkUserExists = require("../middlewares/CheckUserExists")

const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/", userController.createUser)

userRoutes.get("/", userController.listUsers)
userRoutes.get("/:user_id", checkUserExists, userController.listUsersByld)

userRoutes.put("/:user_id", checkUserExists, userController.updateUser)

userRoutes.patch("/admin/:user_id", checkUserExists, userController.updateUserAdmin)

userRoutes.delete("/:user_id", checkUserExists, userController.deleteUser)

module.exports = userRoutes