const config = require('../dbconfig')

function readAboutUs(db, callback) {
  var dbo = db.db(config.dbname);

  dbo.collection("aboutUs").findOne({}, function(err, res) {
    if (err) throw err;
    callback(res);
  });
}

module.exports = { readAboutUs }