
const config = require('../dbconfig')

function readSettings(db, callback) {
  var dbo = db.db(config.dbname);

  dbo.collection("settings").findOne({}, function(err, res) {
    if (err) throw err;
    callback(res);
  });
}

function updateSettings(db, newSettings) {
  if (err) throw err;
  var dbo = db.db(config.dbname);
  var myquery = {};
  var newvalues = { $set: newSettings };
  dbo.collection("settings").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("settings updated to " + newSettings);
    db.close();
  });
}

module.exports = { readSettings, updateSettings }