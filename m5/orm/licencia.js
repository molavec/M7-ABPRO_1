const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class License extends Model {}

License.init({
        license_id:{
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        diagnostic:{
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'license'
    });

module.exports = License;