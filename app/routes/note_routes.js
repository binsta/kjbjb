module.exports = function(app, db) {
    app.post('/notes', (req, body) => {
        //We'll create the note here
        console.log(req.body)
        res.send('Hello There')
    });
};
