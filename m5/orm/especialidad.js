

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

class Specility extends Model {}


Specility.init({
    speciality_id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    speciality: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{Sequelize, modelName: 'speciality'});