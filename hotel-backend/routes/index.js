const roomsRoutes = require('./roomsRoutes');
module.exports = function(app, db) {
  roomsRoutes(app, db);
};