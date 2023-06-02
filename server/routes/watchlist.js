import express from 'express'
import { addToWatchlist, removeFromWatchlist } from '../controllers/WatchlistController.js'

const router = express.Router()

router.post('/', addToWatchlist)
router.delete('/:user_id/:id', removeFromWatchlist)

export default router
