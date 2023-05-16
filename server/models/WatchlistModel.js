import db from "../config/db.js";
import { DataTypes } from 'sequelize';

const WatchlistModel = db.define('watchlist', {
    imdbId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER,
    references: 'users', //table's name, not object name
    referencesKey: 'id'} //column's name
})

export default WatchlistModel