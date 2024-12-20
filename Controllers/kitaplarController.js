const {sequelize} = require('../Models/db.js');
const KitaplarModel = require('../Models/kitaplarModel.js');

const KitapListele = async (req,res)=>{
    await sequelize.sync({ force: false });
    const kitaplar = await KitaplarModel.findAll();
    console.log(kitaplar[0].dataValues);
    res.send("Kitaplar Listeleme");
}
module.exports = {
    KitapListele
}