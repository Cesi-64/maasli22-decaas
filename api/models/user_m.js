/** IMPORT */
const { DataTypes } = require('sequelize')

/** Def model */
module.exports = (sequelize) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        }
    })
}