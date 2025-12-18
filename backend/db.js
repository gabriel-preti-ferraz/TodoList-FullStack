const Sequeliez = require('sequelize')
const sequelize = new Sequeliez({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = sequelize