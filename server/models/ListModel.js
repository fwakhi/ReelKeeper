import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const ListModel = db.define('lists', {
    id: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER,
        references: 'users', //table's name, not object name
        referencesKey: 'id'} //column's name
})

export default ListModel