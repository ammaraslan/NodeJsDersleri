const {DataTypes} = require('sequelize');
const db = require('./db.js');
const Sehirler = require('./SehirlerModel.js');

const Kisiler = db.sequelize.define('kisiler',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    ad_soyad:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    sifre:{
        type:DataTypes.STRING
    },
    dogum_yeri:{
        type:DataTypes.INTEGER
    },
},{
    tableName:'kisiler',
    timestamps:false,
});

// İlişki tanımlama
Sehirler.hasMany(Kisiler, { foreignKey: 'dogum_yeri', sourceKey: 'plaka' });
Kisiler.belongsTo(Sehirler, { foreignKey: 'dogum_yeri', targetKey: 'plaka' });

module.exports = Kisiler;