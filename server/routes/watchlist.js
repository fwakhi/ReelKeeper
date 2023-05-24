import express from 'express'
import { getAllByUserId, addToWatchlist, removeFromWatchlist } from '../controllers/WatchlistController.js'

const router = express.Router()

router.get('/:id', getAllByUserId)
router.post('/', addToWatchlist)
router.delete('/:user_id/:id', removeFromWatchlist)

export default router
