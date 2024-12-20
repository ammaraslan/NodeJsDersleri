const {sequelize} = require('../Models/db.js');
const UlkelerModel = require('../Models/UlkelerModel.js');
const UlkeListele = async (req,res)=>{
    //await sequelize.sync({ force: true });
    const ulkeler = await UlkelerModel.findAll();
    console.log(ulkeler[0].dataValues);
    res.send("Ulkeler Listeleme");
}
module.exports = {
    UlkeListele
}