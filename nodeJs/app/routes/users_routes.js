bodyParser = require('body-parser').json();

module.exports = function (app, fs) {
    app.post("/info",bodyParser, function (request,response) {
        var body = request.body;
        console.log(body);
        fs.appendFile('users.txt', body.firstName + ' ' + body.lastName + ' ' + body.zip + ' ' + body.gender
                                                + ' ' + body.city + ' ' + body.username + ' ' + body.password + ' ' + body.email + '\n',
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                response.redirect('/html/LogIn.html');
            });
    });

    app.get("/tryToLogIn", function(request, response) {

        var url = require('url');
        var url_parts = url.parse(request.url,true);
        var query = url_parts.query;

        var email = query['email'];
        var password = query['password'];

        var emails =[];
        var passwords = [];

        var isLogIn = false;
        fs.readFile('users.txt', 'utf-8', function (err, users) {
            var lines = users.split('\n');

            for (var i = 0; i < lines.length; i++) {
                emails.push(lines[i].split(' ')[7]);
                passwords.push(lines[i].split(' ')[6]);
            }

            for(var i = 0; i< passwords.length; i++){
                if(email==emails[i]){
                    if(password==passwords[i]){
                        fs.writeFile('enter.txt', '', function (err) {
                            if(err) throw err;
                            console.log('clear');
                        })
                        fs.appendFile('enter.txt', lines[i].split(' ')[0] + ' ' + lines[i].split(' ')[1] + ' ' +  lines[i].split(' ')[2] + ' ' + lines[i].split(' ')[3] + ' ' +
                                                     lines[i].split(' ')[4] + ' ' + lines[i].split(' ')[5] + ' ' + lines[i].split(' ')[7],
                            function (err) {
                            if (err) throw err;
                            console.log('Saved!');
                            response.redirect('/html/mySpace.html');
                        });
                        isLogIn = true;
                        console.log('You a log in');
                    }
                }
            }

            if(!isLogIn){
                response.redirect('/html/LogIn.html');
                //response.send(JSON.stringify(user));
            }
        });


    });
};