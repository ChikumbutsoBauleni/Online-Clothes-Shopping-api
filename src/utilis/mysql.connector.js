const mysql = ('mysql')
const dotenv = require('dotenv')

dotenv.config()

const config = {
    host: "localhost",
    database: Process.env.DATABASE.NAME,
    user:process.env.DATABASE.USER,
    password: process.env.DATABASE_PASSWORD,
    connectionLimit: 100,

}

const connection = mysql.createConnection(config)

module.exports = connection