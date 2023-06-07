import WatchlistModel from "../models/WatchlistModel.js";


export const addToWatchlist = async (req, res) => {
    try {
        await WatchlistModel.create(req.body)
        res.json({ message: 'Register created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const removeFromWatchlist = async (req, res) => {
    try {
        await WatchlistModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: 'Movie deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}
