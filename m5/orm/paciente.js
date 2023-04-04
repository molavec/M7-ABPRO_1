
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

class Patient extends Model {}

Patient.init({
    patient_id:{
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    patient_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    patient_rut: {
        type: Sequelize.STRING,
        allowNull: false
    },
    patiend_add:{
        type: Sequelize.STRING,
        allowNull: false
    }},{Sequelize, modelName: 'patient'});

module.exports = Patient;