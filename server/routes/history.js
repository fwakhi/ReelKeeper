import express from 'express'
import { addToHistory, removeFromHistory } from '../controllers/HistoryController.js'

const router = express.Router()

router.post('/', addToHistory)
router.delete('/:user_id/:id', removeFromHistory)

export default router
