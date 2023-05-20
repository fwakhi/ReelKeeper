import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const FavoriteModel = db.define('favorites', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userId: { type: DataTypes.INTEGER, primaryKey: true,
        references: 'users', //table's name, not object name
        referencesKey: 'id'}, //column's name
    poster_path: {type: DataTypes.STRING}
})

export default FavoriteModel