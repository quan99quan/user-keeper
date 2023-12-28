import express from 'express'
import usersController from '../../controller/users.controller'
const router =express.Router();
router.post("/",usersController.createUser)
router.get("/",usersController.getAllUsers)
router.get("/:id",usersController.getIdUsers)
router.patch("/:id",usersController.updateUser)
router.delete("/:id",usersController.deleteUser)
export default router
