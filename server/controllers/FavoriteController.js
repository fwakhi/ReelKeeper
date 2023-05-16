import FavoriteModel from "../models/FavoriteModel.js";


export const getAllFavsByUserId = async (req, res) => {
    try {
        const favorites = await FavoriteModel.findAll({
            where: {
                userId: req.params.id
            }
        })
        res.json(favorites[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addToFavorites = async (req, res) => {
    try {
        await FavoriteModel.create(req.body)
        res.json({ message: 'Register created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const removeFromFavorites = async (req, res) => {
    try {
        await FavoriteModel.destroy({
            where: { 
                imdbId: req.params.id 
            }
        })
        res.json({ message: 'Register deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

