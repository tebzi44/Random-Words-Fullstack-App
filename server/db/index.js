const process = require('process')
const signale = require('signale');
const { Sequelize } = require('sequelize');
const Words = require('./models/Words')

const connection = new Sequelize(
    'random-words', 
    'postgres', 
    process.env.DATABASE_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    }
);

(async () => {
    try {
        await connection.authenticate()
        signale.success('DB:Connect: Successfully')
    } catch (error) {
        signale.error(`DB:Connect: Error :${error}`)
    }
})()

Words.init(connection)
Words.sync({ force: false })

module.exports = connection

