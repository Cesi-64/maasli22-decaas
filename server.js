/** IMPORT */
const app = require('./api/api')
const DB = require('./api/db.config')


DB.sequelize.authenticate()
    .then(() => console.log(`DATABASE CNX OK`))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}. You are the best of the world`)
        })
    })
    .catch(e => console.log(e))
