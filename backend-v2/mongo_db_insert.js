var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hoteldb");
  const news = [
    {
      id: 1,
      image: '/images/news1.jpg',
      text: 'Открытие ресторана. Авторская кухня.'
    },
    {
      id: 2,
      image: '/images/news2.jpg',
      text: 'Новые приключенческие программы.'
    },
    {
      id: 3,
      image: '/images/news3.jpg',
      text: 'Новые номера отеля.'
    },
    {
      id: 4,
      image: '/images/news4.jpg',
      text: 'Открытие сезона 20!8.'
    }
  ]
  news.forEach(room => {
    dbo.collection("news").insertOne(room, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
          
  });
});