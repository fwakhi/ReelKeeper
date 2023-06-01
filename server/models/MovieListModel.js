import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const MovieListModel = db.define('movielist', {
    listid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: 'lists',
        referencesKey: 'id'
    }
    ,
    id: { type: DataTypes.INTEGER, primaryKey: true },

    poster_path: { type: DataTypes.STRING }
}, {
    tableName: 'listMovie'
})

export default MovieListModel
