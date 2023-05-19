import FavoriteModel from "../models/FavoriteModel.js";


export const getAllFavsByUserId = async (req, res) => {
    try {
        const favorites = await FavoriteModel.findAll({
            where: {
                userId: req.params.user_id
            }
        })
        res.json(favorites)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addToFavorites = async (req, res) => {
    // const duplicateUsername = await UserModel.findOne({ where: { username: user } })
    // if (duplicateUsername) {
    //     return res.sendStatus(409);
    // }
    try {
        await FavoriteModel.create(req.body)
        res.json({ message: 'Register created' })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const removeFromFavorites = async (req, res) => {
    try {
        await FavoriteModel.destroy({
            where: {
                id: req.params.movie_id,
                userId: req.params.user_id,
            }
        })
        res.json({ message: 'Register deleted' })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

