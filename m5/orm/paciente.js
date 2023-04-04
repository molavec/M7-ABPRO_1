const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Patient extends Model {}

Patient.init({
        patient_id:{
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        patient_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        patient_rut: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patiend_add:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'patient'
    });

module.exports = Patient;