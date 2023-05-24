import ListModel from "../models/ListModel.js";


export const getAllListByUserId = async (req, res) => {
    try {
        const lists = await ListModel.findAll({
            where: {
                userId: req.params.id
            }
        })
        res.json(lists)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addList = async (req, res) => {
    try {
        await ListModel.create(req.body)
        res.json({ message: 'List created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const removeList = async (req, res) => {
    try {
        await ListModel.destroy({
            where: { 
                id: req.params.id 
            }
        })
        res.json({ message: 'List deleted' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

