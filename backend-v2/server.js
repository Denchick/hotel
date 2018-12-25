const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbconfig = require('./dbconfig');
const settingsHandler = require('./handlers/settings') 
const aboutHandler = require('./handlers/aboutUs')
const roomsHandler = require('./handlers/rooms')
const newsHandler = require('./handlers/news')
const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbconfig.url, (err, database) => {
  if (err) {
    console.error(err)
  }

  app.get('/', (req, res) => res.send('Hello World!'))
  app.get('/api/settings', (req, res) => {
    console.info('GET /api/settings')
    settingsHandler.readSettings(database, function(setttingsData) {
      console.info(setttingsData);
      res.setHeader('Content-Type', 'application/json');
      res.send(setttingsData)
    });
  });

  app.get('/api/aboutUs', (req, res) => {
    console.info('GET /api/aboutUs')
    aboutHandler.readAboutUs(database, function(aboutUsData) {
      console.info(aboutUsData);
      res.setHeader('Content-Type', 'application/json');
      res.send(aboutUsData);
    });
  });

  app.get('/api/rooms', (req, res) => {
    console.info('GET /api/rooms')
    roomsHandler.readRooms(database, function(roomsData) {
      console.info(roomsData);
      res.setHeader('Content-Type', 'application/json');
      res.send(roomsData);
    })
  })

  app.get('/api/news', (req, res) => {
    console.info('GET /api/news')
    newsHandler.readNews(database, function(newsData) {
      console.info(newsData);
      res.setHeader('Content-Type', 'application/json');
      res.send(newsData);
    })
  })

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});     