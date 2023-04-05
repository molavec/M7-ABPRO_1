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
    patient_rut: {
        type: DataTypes.STRING(11),
        primaryKey: true
        },
        patient_name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

        patient_add:{
            type: DataTypes.STRING(100),
            allowNull: false
        }},
    
    {
        sequelize,
        modelName: 'patient'
    });

module.exports = Patient;