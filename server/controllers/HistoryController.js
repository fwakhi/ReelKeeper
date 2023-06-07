import HistoryModel from "../models/HistoryModel.js";


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
                id: req.params.id
            }
        })
        res.json({ message: 'Register deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}
