const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

const Speciality = require('../orm/especialidad');

class Medic extends Model {}

Medic.init({
    medic_rut: {
      type: DataTypes.STRING(11),
      primaryKey: true
    },
    medic_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    medic_add: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    speciality_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: Speciality,
        key: 'speciality_id'
      }
  }
  },
  {
    sequelize,
    modelName: 'medic',
  });


Speciality.hasOne(Medic, { foreignKey: 'speciality_id' });
Medic.belongsTo(Speciality, { foreignKey: 'speciality_id' });

module.exports = Medic;