const {DataTypes} = require('sequelize');
const db = require('./db.js');
const Sehirler  = require('./SehirlerModel.js');

const Ulkeler = db.sequelize.define('ulkeler',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:false,
            primaryKey:true
        },
        adi:{
            type:DataTypes.STRING
        },
        baskent:{
            type:DataTypes.INTEGER,
        },
    },{
        tableName:'ulkeler',
        timestamps:false,
    })

// İlişki tanımlama
Sehirler.hasOne(Ulkeler, { foreignKey: 'baskent', sourceKey: 'plaka' });
Ulkeler.belongsTo(Sehirler, { foreignKey: 'baskent', targetKey: 'plaka' });

module.exports = Ulkeler;
