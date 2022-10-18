const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    'host':process.env.DB_SERVER,
    'port':process.env.DB_PORT,
    dialect:'mysql'
})

module.exports = sequelize;