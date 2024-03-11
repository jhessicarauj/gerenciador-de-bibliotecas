const UserController = require("../controllers/UserController")
const checkUserExists = require("../middlewares/CheckUserExists")

const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/users", userController.createUser)

userRoutes.get("/users", userController.listUsers)
userRoutes.get("/users/:user_id", checkUserExists, userController.listUsersByld)

userRoutes.put("/users/:user_id", checkUserExists, userController.updateUser)

userRoutes.patch("/users/admin/:user_id", checkUserExists, userController.updateUserAdmin)

userRoutes.delete("/users/:user_id", checkUserExists, userController.deleteUser)

module.exports = userRoutes