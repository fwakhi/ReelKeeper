import express from 'express'
import { getAllFavsByUserId, addToFavorites, removeFromFavorites } from '../controllers/FavoriteController.js'

const router = express.Router()

router.get('/:user_id', getAllFavsByUserId)
router.post('/', addToFavorites)
router.delete('/:movie_id', removeFromFavorites)

export default router
