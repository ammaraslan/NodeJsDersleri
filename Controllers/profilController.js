var Kisiler = require('../Models/kisilerModel.js');
var Sehirler = require('../Models/SehirlerModel.js');
var {Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const {sequelize} = require('../Models/db.js');
const KisiEkle = async (req,res)=>{
   await Kisiler.create({
        ad_soyad:"Merdan Seyrek",
        email:"ornek@gmail.com",
        sifre:"123456",
        dogum_yeri:72
    })
res.send("EKLEME BAŞARILI")
}
const KisiGuncelle = async(req,res) =>{
    await Kisiler.update(
        {sifre:"123"},
        {
            where: {id:1 }
        }
    )
    res.send("Güncelleme BAŞARILI")
}
const KisiSil = async(req,res)=>{
    await Kisiler.destroy({
        where: {
          id: 6,
        }})

    res.send(Kisiler.findAll())
}
const KisiListele = async (req,res)=>{
    /*
    const kisiler = await Kisiler.findAll(
        {
            attributes:['ad_soyad','email'],
        }
    );
    
    const kisiler = await Kisiler.findAll({
            where:{
                dogum_yeri:72,
                ad_soyad:"Süleyman Eviz"
            }
    })
   const kisiler = await Kisiler.findAll({
    where:{
        ad_soyad : "Süleyman Eviz"
    },
    attributes:['ad_soyad'],

   })
    
    const kisiler = await Kisiler.findAll({
        where:{
            [Op.and] : [
                {dogum_yeri:72},
                {ad_soyad:"Süleyman Eviz"}]
        }
    })

    const kisiler = await Kisiler.findAll({
        where:{
            [Op.like] : '%Süleyman%'
        }
    })
    const kisiler = await Kisiler.findByPk(2)
   
    const kisiler = await Kisiler.findOne({
        where:{
            ad_soyad:"Süleyman Eviz"
        }
    })
       
    const kisiler = await sequelize.query
    ('SELECT * FROM kisiler', {type: QueryTypes.SELECT});
    console.log(kisiler)
    res.send(kisiler)
      
    const kisiler = await Kisiler.findAll({
        include: [Sehirler]
    });*/
    const kisiler = await Kisiler.findAll(
        {
            where:{
                id:1
            },
            include:[Sehirler]
        }
    );
    
    console.log(kisiler[0].dataValues)
    console.log(kisiler[0].dataValues.sehirler.adi)
    res.send(kisiler)

}
const SehirListele = async (req,res)=>{
    const sehirler = await Sehirler.findAll(
        {
            include:[Kisiler]
        }
    );
    console.log(sehirler[0].dataValues.kisilers)
    res.send(sehirler)
}
module.exports = {
    KisiEkle,
    KisiGuncelle,
    KisiSil,
    KisiListele,
    SehirListele
}