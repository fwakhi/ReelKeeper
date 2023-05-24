import express from 'express'
import { getAllHistoryByUserId, addToHistory, removeFromHistory } from '../controllers/HistoryController.js'

const router = express.Router()

router.get('/:id', getAllHistoryByUserId)
router.post('/', addToHistory)
router.delete('/:user_id/:id', removeFromHistory)

export default router
