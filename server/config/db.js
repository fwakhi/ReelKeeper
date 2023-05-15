import { Sequelize } from 'sequelize'


const db = new Sequelize('reel_keeper', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export default db

// const mysql = require('mysql')

// const db = mysql.createConnection({
//     {
//     host: "localhost",
//     user: "test",
//     password: "test",
//     database: "reel_keeper"
// })

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to MySQL database!');
// });

// module.exports = db;