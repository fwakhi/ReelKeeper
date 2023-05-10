import db from "../config/db.js";

import { DataTypes } from 'sequelize'

const UserModel = db.define('users', {
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
})

export default UserModel
