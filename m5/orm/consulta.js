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

const Patient = require('../orm/paciente');
const Medic = require('../orm/medico');

Consult.init({
        consult_id: {
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
            type: DataTypes.STRING(5),
            allowNull: false,
            unique: true
        },
        patient_rut: {
            type: DataTypes.STRING(11),
            //aqui se agrega la referencia al rut del paciente
            references: {
                model: Patient,
                key: 'patient_rut'
            }   
        },
        medic_rut: {
            type: DataTypes.STRING(11),
            //aqui se agrega la referencia al rut del medico
            references: {
                model: Medic,
                key: 'medic_rut'
            }
        }
    },
    { 
        sequelize, 
        modelName: 'consult', 
    });

//Aqui se define la relacion entre patient y consult

Patient.hasMany(Consult, { foreignKey: 'patient_rut' });
Consult.belongsTo(Patient, { foreignKey: 'patient_rut' });

//Aqui se define la relacion entre medic y consult

Medic.hasMany(Consult, { foreignKey: 'medic_rut' });
Consult.belongsTo(Medic, { foreignKey: 'medic_rut' });


module.exports = Consult;