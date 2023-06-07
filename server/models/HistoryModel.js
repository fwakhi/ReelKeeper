import db from "../config/db.js";
import { DataTypes } from 'sequelize';
import UserModel from "./UserModel.js";

const HistoryModel = db.define('history', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: UserModel,
            key: 'id'
        }
    }, 
    poster_path: { type: DataTypes.STRING }
}, {
    tableName: 'history'
})

export default HistoryModel