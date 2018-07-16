const  usersRoutes = require("./users_routes");
const newCard  = require('./newCard');
const usersInfo = require('./users_info');
module.exports = function (app, fs) {
    usersRoutes(app, fs);
    newCard(app,fs);
    usersInfo(app,fs);
};
