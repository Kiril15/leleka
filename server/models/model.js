const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Comment = sequelize.define("comment", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    grade: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {
    Comment
}