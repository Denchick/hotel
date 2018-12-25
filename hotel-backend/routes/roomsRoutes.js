module.exports = function(app, db) {
    app.post('/rooms', (req, res) => {
        console.info(req)
        const room = { text: req.body.body, title: req.body.title };
        db.collection('rooms').insert(room, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
      });
};