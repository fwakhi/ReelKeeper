import express from 'express'
import { getAllMovieListByListId, addMovieList, removeMovieList } from '../controllers/MovieListController.js'

const router = express.Router()

router.get('/:id', getAllMovieListByListId)
router.post('/', addMovieList)
router.delete('/listId/:id', removeMovieList)

export default router
