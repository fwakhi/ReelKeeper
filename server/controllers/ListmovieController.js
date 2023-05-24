import ListmovieModel from "../models/ListmovieModel.js";


export const getAllListMovieByListId = async (req, res) => {
    try {
        const listMovie = await ListmovieModel.findAll({
            where: {
                listId: req.params.id
            }
        })
        res.json(listMovie)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addMovieList = async (req, res) => {
    try {
        await ListmovieModel.create(req.body)
        res.json({ message: 'MovieList created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const removeMovieList = async (req, res) => {
    try {
        await ListmovieModel.destroy({
            where: { listId: req.params.id }
        })
        res.json({ message: 'MovieList deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

