var SehirlerModel  = require('../models/sehirlerModel');
const sehirEkle = async (req, res) => {
    try {
        await SehirlerModel.create({
            plaka:req.body.plaka,
            adi: req.body.adi   
        })
        res.send("Ekleme Başarılı")
    } catch (error) {
       console.log("HATA : "+ error)
    }
}
const sehirGuncelle = async (req,res) =>{
    try{
        await SehirlerModel.update(
            {adi:req.body.adi},
            {
                where: {plaka:req.body.plaka }
            }
        )
        res.send("Güncelleme Başarılı")
    } catch(error)
    {
        console.log("HATA: "+error)
    }
}
const sehirSil = async (req,res) =>{

  try{
    await SehirlerModel.destroy({
        where: {
          plaka: req.body.plaka,
        }})
        res.send("Silme Başarılı")
    } catch(error)
    {
        console.log("HATA: "+error)
    }
}
module.exports = {
    sehirEkle,
    sehirGuncelle,
    sehirSil
}