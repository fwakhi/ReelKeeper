import HistoryModel from "../models/HistoryModel.js";


export const getAllHistoryByUserId = async (req, res) => {
    try {
        const history = await HistoryModel.findAll({
            where: {
                userId: req.params.id
            }
        })
        res.json(history[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addToHistory = async (req, res) => {
    try {
        await HistoryModel.create(req.body)
        res.json({ message: 'Register created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const removeFromHistory = async (req, res) => {
    try {
        await HistoryModel.destroy({
            where: { 
                imdbId: req.params.id 
            }
        })
        res.json({ message: 'Register deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

