
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

class Medic extends Model {}

Medic.init({
    medic_rut: {
      type: Sequelize.STRING,
      autoIncrement: true,
      primaryKey: true
    },
    medic_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    medic_add: {
      type: Sequelize.STRING,
      allowNull: false
    },
    speciality
  },{Sequelize, modelName: 'medic'});



module.exports = User;