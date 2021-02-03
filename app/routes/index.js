const noteRoutes = require('./note_routes');

module.export = function(app, db) {
    noteRoutes(app,db);
}
