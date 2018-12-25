const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbconfig = require('./config/db');

const app = express();
const port = 8000;
require('./routes')(app, {});


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbconfig.url, (err, database) => {
  if (err) {
    console.error(err)
  }
  require('./routes')(app, database);

  const db = database.db("hotel")
  require('./routes')(app, db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})