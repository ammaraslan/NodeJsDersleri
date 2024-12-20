const Sequelize = require('sequelize');
var db = {};
const sequelize  = new Sequelize
('nodejs','root','root',{
    host:'localhost',
    dialect:'mysql'
});
function baglan(){
    sequelize.authenticate().then(()=>{
        console.log("Bağlantı Başarılı");
    }).catch(err=>{
        console.log("Bağlantı Başarısız",err);
    })
}
db.baglan = baglan;
db.Sequelize  =Sequelize;
db.sequelize = sequelize;

module.exports = db;