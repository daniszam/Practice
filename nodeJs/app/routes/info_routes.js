module.exports = function (app, fs) {
    app.get("/info", (req,res) => {
        var url = require('url');
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        console.log('First name ' + query['FirstName']);
        console.log('Last name ' + query['LastName']);
        console.log('Zip ' + query['Zip']);
        console.log('Gender ' + query['Gender']);
        console.log('State ' + query['State']);
        console.log('Username ' + query['Username']);
        console.log('Password ' + query['Password']);
        console.log('Email ' + query['Email']);
        res.redirect("/html/LogIn.html");
       fs.appendFile('users.txt', query['FirstName'] + ' ' + query['LastName'] + ' ' + query['Zip'] + ' ' + query['Gender']
                                                + ' ' + query['State'] + ' ' + query['Username'] + ' ' + query['Password'] + ' ' + query['Email'] + ' ',
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                res.send();
            });
       });
};