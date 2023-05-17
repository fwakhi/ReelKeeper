import express from 'express'
import { getAllListMovieByListId, addMovieList, removeMovieList } from '../controllers/ListmovieController.js'

const router = express.Router()

router.get('/:id', getAllListMovieByListId)
router.post('/', addMovieList)
router.delete('/:id', removeMovieList)

export default router
