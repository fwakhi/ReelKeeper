import express from 'express'
import { getAllFavsByUserId, addToFavorites, removeFromFavorites } from '../controllers/FavouriteController.js'

const router = express.Router()

router.get('/:id', getAllFavsByUserId)
router.post('/', addToFavorites)
router.delete('/:id', removeFromFavorites)

export default router
