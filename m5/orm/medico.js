const dbInfo = require('./dbInfo');

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(`postgres://${dbInfo.USER}:${dbInfo.PASSWORD}@${dbInfo.HOST}:${dbInfo.PORT}/${dbInfo.DATABASE}`);

class Medic extends Model {}

Medic.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Medic' // We need to choose the model name
});

// the defined model is the class itself
// console.log(Medic === sequelize.models.Medic); // true

module.exports = Medic;