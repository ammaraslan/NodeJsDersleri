const {DataTypes} = require('sequelize');
const db = require('./db.js');
const Kisiler = require('./kisilerModel.js');

const Kitaplar = db.sequelize.define('kitaplar',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:false,
        primaryKey:true
    },
    kitap_adi:{
        type:DataTypes.STRING
    },
    yazar_adi:{
        type:DataTypes.STRING
    }
},{
    tableName:'kitaplar',
    timestamps:false,
})

//n-n ilişli
Kitaplar.belongsToMany(Kisiler, { 
    through: 'KitapToKisi',  // Ara tablonun adı
    foreignKey: 'kitap_id', 
    otherKey: 'kisi_id',
    as: 'okuyanlar',       // Kitaplar için ilişki adı
    timestamps: false
});

Kisiler.belongsToMany(Kitaplar, { 
    through: 'KitapToKisi',  // Aynı ara tablo kullanılır
    foreignKey: 'kisi_id', 
    otherKey: 'kitap_id',
    as: 'okunan_kitaplar', // Kisiler için ilişki adı
    timestamps: false
});

module.exports = Kitaplar