const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
    `postgres://`
    + `${dbInfo.USER}:`
    + `${dbInfo.PASSWORD}@`
    + `${dbInfo.HOST}:`
    + `${dbInfo.PORT}/`
    + `${dbInfo.DATABASE}`);

class Consult extends Model { }

const Patient = require('./paciente');

Consult.init({
        id_consult: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        id_box: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_lic: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rut_patient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rut_medic: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { 
        sequelize, 
        modelName: 'consult', 
    });


module.exports = Consult;