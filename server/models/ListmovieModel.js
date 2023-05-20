import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const ListmovieModel = db.define('listmovie', {
    listid: {
        type: DataTypes.INTEGER,
        references: 'lists',
        referencesKey: 'id'
    }
    ,
    imdbId: { type: DataTypes.INTEGER },
    userId: {
        type: DataTypes.INTEGER,
        references: 'users', //table's name, not object name
        referencesKey: 'id'
    }, //column's name
    poster_path: { type: DataTypes.STRING }
})

export default ListmovieModel