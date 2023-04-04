const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

const Speciality = require('./especialidad');

class Medic extends Model {}

Medic.init({
    medic_rut: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    medic_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medic_add: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'medic',
  });

module.exports = Medic;