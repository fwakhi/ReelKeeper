import express from 'express'
import { getAllFavsByUserId, addToFavorites, removeFromFavorites } from '../controllers/FavoriteController.js'

const router = express.Router()

router.get('/:user_id', getAllFavsByUserId)
router.post('/', addToFavorites)
router.delete('/:user_id/:movie_id', removeFromFavorites)

export default router
