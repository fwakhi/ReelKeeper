import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const ListModel = db.define('lists', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, primaryKey: true,
        references: 'users', //table's name, not object name
        referencesKey: 'id'} //column's name
})

export default ListModel