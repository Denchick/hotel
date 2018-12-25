const config = require('../dbconfig')

function readRooms(db, callback) {
  var dbo = db.db(config.dbname);

  dbo.collection("rooms").find({}).toArray( function(err, res) {
    if (err) throw err;
    callback(res);
  });
}

module.exports = { readRooms }