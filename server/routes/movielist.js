import express from 'express'
import { addMovieList, removeMovieList } from '../controllers/MovieListController.js'

const router = express.Router()

router.post('/', addMovieList)
router.delete('/:id/:movie_id', removeMovieList)

export default router
