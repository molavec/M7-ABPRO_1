
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

class Consult extends Model {}

const patient = require('./paciente');



Consult.init({
    id_consult: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    date: {
        type: Sequelize.Date,
        allowNull: false
    },
    id_box: {
        type: Sequelize.STRING,
        allowNull: false  
    },
    id_lic: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    rut_patient: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rut_medic: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{Sequelize, modelName: 'consult'});
