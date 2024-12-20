var express = require('express');
var db = require('./Models/db.js');
var sehirController = require('./Controllers/sehirlerController.js');
var profilController = require('./Controllers/profilController.js');
var ulkelerController = require('./Controllers/ulkelerController.js');
var kitaplarController = require('./Controllers/kitaplarController.js');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.post('/sehir-ekle',sehirController.sehirEkle)
app.post('/sehir-guncelle',sehirController.sehirGuncelle)
app.post('/sehir-sil',sehirController.sehirSil)

app.get('/kisi-ekle',profilController.KisiEkle);

app.get('/kisi-guncelle',profilController.KisiGuncelle);

app.get('/kisi-sil',profilController.KisiSil)

app.get('/kisi-listele',profilController.KisiListele)

app.get('/sehir-listele',profilController.SehirListele)

app.get('/ulke-listele',ulkelerController.UlkeListele)

app.get('/kitap-listele',kitaplarController.KitapListele)


app.listen(1000,()=>{
    db.baglan;
    console.log("Sunucu Ayaktadır")
})







/*




var http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url =="/anasayfa"){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write("Anasayfa");
        res.end();
    }
    else if(req.url =="/"){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write("Anasayfa");
        res.end();
    }
    else if (req.url =="/hakkimizda"){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write("Hakkımızda");
        res.end();
    }
    else if (req.url =="/iletisim"){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write("İletişim");
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
        res.write("Sayfa Bulunamadı");
        res.end();
    }
})
server.listen(1000,()=>{
    console.log("Sunucu Ayaktadır")
})
*/
