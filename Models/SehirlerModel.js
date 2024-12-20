const {DataTypes} = require('sequelize');
const db = require('./db.js');

const Sehirler = db.sequelize.define('sehirler',
    {
        plaka:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
            primaryKey:true
        },
        adi:{
            type:DataTypes.STRING
        }
    },{
        tableName:'sehirler',
        timestamps:false,
    })


module.exports = Sehirler;
