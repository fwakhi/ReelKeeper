import express from 'express'
import { addToFavorites, removeFromFavorites } from '../controllers/FavoriteController.js'

const router = express.Router()
router.post('/', addToFavorites)
router.delete('/:user_id/:movie_id', removeFromFavorites)

export default router
