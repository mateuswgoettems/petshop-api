const mysql = require('mysql')
require('dotenv').config();

const conexao = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    port: process.env.DB_PORT,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWD}`,
    database: `${process.env.DATABASE}`
})

module.exports = conexao