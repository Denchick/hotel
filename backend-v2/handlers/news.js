const config = require('../dbconfig')

function readNews(db, callback) {
  var dbo = db.db(config.dbname);

  dbo.collection("news").find({}).toArray( function(err, res) {
    if (err) throw err;
    callback(res);
  });
}

module.exports = { readNews }