import FavoriteModel from "../models/FavoriteModel.js";
export const addToFavorites = async (req, res) => {
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
