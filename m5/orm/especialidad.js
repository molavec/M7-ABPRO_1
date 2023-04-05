const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Speciality extends Model {}


Speciality.init({
        speciality_id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        speciality: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        sequelize, 
        modelName: 'speciality'
    });

module.exports = Speciality;