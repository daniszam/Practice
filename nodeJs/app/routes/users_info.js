bodyParser = require('body-parser').json();

module.exports = function (app, fs) {

    app.get('/getUsers', function (request, response) {
        fs.readFile('enter.txt', 'utf-8', function (err, card) {
            var lines = card.split('\n');

            var result = [];
            for (var i = 0; i<lines.length; i++){
                result.push({'firstName' : lines[i].split(' ')[0],
                    'lastName' : lines[i].split(' ')[1],
                    'zip' : lines[i].split(' ')[2],
                    'gender' : lines[i].split(' ')[3],
                    'city' : lines[i].split(' ')[4],
                    'username' : lines[i].split(' ')[5],
                    'email' : lines[i].split(' ')[6]});
            }
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));
        })

    })

}