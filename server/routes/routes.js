import express from 'express'
import { addUser, getAllUsers, removeUser, updateUser, getUserById } from '../controllers/UserController.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', removeUser)

export default router
