import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const ListmovieModel = db.define('listmovie', {
    listid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: 'lists',
        referencesKey: 'id'
    }
    ,
    id: { type: DataTypes.INTEGER, primaryKey: true },
    
    poster_path: { type: DataTypes.STRING }
})

export default ListmovieModel