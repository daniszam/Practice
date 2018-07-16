bodyParser = require('body-parser').json();

module.exports = function (app, fs) {
    app.post('/newCard', bodyParser, function (request, response) {
        var body = request.body;
        console.log(body);
        fs.appendFile('card.txt', body.href + ' $ ' + body.cardImageTop + ' $ ' + body.cardTitle + ' $ ' + body.cardText + ' $ ' + body.textMuted + '\n',

            function (err) {
                if (err) throw err;
                console.log('Saved!');
                response.redirect('/html/MySite.html');
            });

    });

    app.get('/getCards', function (request, response) {
        fs.readFile('card.txt', 'utf-8', function (err, card) {
            var lines = card.split('\n');

            var result = [];
            for (var i = 0; i<lines.length; i++){
                result.push({'href' : lines[i].split(' $ ')[0],
                            'cardImageTop' : lines[i].split(' $ ')[1],
                            'cardTitle' : lines[i].split(' $ ')[2],
                            'cardText' : lines[i].split(' $ ')[3],
                            'textMuted' : lines[i].split(' $ ')[4]});
            }
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));
        })

    })

}