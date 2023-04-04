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

const Consult = require('../orm/consulta');
const Medic = require('../orm/medico.js');

License.init({
        license_id:{
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        diagnostic:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        start_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        medic_rut: {
            type: DataTypes.STRING(11),
            allowNull: false,
            //aqui se agrega la referencia al rut del medico
            references: {
                model: Medic,
                key: 'medic_rut'
            }
        },
        consult_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            //Aqui se agrega la referencia al id de consulta
            references: {
                model: Consult,
                key: 'consult_id'
            }
        },
    },
    {
        sequelize,
        modelName: 'license'
    });


//Aqui se agrega la referencia al rut del medico
Medic.hasMany(License, { foreignKey: 'medic_rut' });
License.belongsTo(Medic, { foreignKey:'medic_rut' });

//Aqui se agrega la referencia al id de consulta
Consult.hasOne(License, { foreignKey: 'consult_id' });
License.belongsTo(Consult, { foreignKey: 'consult_id' });





module.exports = License;