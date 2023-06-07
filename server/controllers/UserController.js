import FavoriteModel from "../models/FavoriteModel.js";
import HistoryModel from "../models/HistoryModel.js";
import ListModel from "../models/ListModel.js";
import UserModel from "../models/UserModel.js";
import WatchlistModel from "../models/WatchlistModel.js";


UserModel.hasMany(FavoriteModel);
UserModel.hasMany(WatchlistModel);
UserModel.hasMany(HistoryModel);
UserModel.hasMany(ListModel);

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where: { id: req.params.id },
            include: { all: true, nested: true, separate:true }
        });
        res.json(user[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const addUser = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({ message: 'User created' })

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        await UserModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ message: 'User updated' })

    } catch (error) {
        res.json({ message: error.message })
    }
}
export const removeUser = async (req, res) => {
    try {
        await UserModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ message: 'User updated' })

    } catch (error) {
        res.json({ message: error.message })
    }
}
