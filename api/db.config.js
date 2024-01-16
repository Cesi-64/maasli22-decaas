/** IMPORT */
const { Sequelize } = require('sequelize')

/** PARAM SEQUELIZE */
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)

/** MODEL */
const db = {}

db.sequelize = sequelize
db.User = require('./models/user_m')(sequelize)

/** Synchronisation BDD */
//db.sequelize.sync({alter: true})

module.exports = db