import express from 'express'
import { addList, removeList } from '../controllers/ListController.js'

const router = express.Router()

router.post('/', addList)
router.delete('/:user_id/:id', removeList)

export default router
