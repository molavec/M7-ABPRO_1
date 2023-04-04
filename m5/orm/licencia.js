
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('');

class License extends Model {}

License.init({
    license_id:{
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    diagnostic:{
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    end_date:{
        type: Sequelize.DATE,
        allowNull: false
    }
},{Sequelize, modelName: 'license'});