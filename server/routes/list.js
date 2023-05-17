import express from 'express'
import { getAllListByUserId, addList, removeList } from '../controllers/ListController.js'

const router = express.Router()

router.get('/:id', getAllListByUserId)
router.post('/', addList)
router.delete('/:id', removeList)

export default router
