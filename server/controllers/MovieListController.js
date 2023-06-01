import MovieListModel from "../models/MovieListModel.js";


export const getAllMovieListByListId = async (req, res) => {
    try {
        const movieList = await MovieListModel.findAll({
            where: {
                listId: req.params.id
            }
        })
        res.json(movieList)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addMovieList = async (req, res) => {
    try {
        await MovieListModel.create(req.body)
        res.json({ message: 'MovieList created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const removeMovieList = async (req, res) => {
    try {
        await MovieListModel.destroy({
            where: { listId: req.params.id }
        })
        res.json({ message: 'MovieList deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

