import express from 'express'
import { addUser, getAllUsers, removeUser, updateUser, getUserById } from '../controllers/UserController.js'
import verifyJWT from '../middleware /verifyJWT.js'

const router = express.Router()

router.get('/', verifyJWT, getAllUsers)
router.get('/:id', getUserById)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', removeUser)

export default router
