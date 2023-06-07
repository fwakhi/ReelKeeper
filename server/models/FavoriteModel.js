import db from "../config/db.js";
import { DataTypes } from 'sequelize';
import UserModel from "./UserModel.js";

const FavoriteModel = db.define('favorites', {
    id: { type: DataTypes.STRING, primaryKey: true },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: UserModel,
            key: 'id'
        }
    },
    poster_path: { type: DataTypes.STRING }
})

export default FavoriteModel