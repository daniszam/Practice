module.exports = function getUser(userName) {
    const xmlHttpReq = require('/Users/danis_zam/Desktop/nodeJs/node_modules/xmlhttprequest').XMLHttpRequest;
    const xmlHttp = new xmlHttpReq();
    //var xmlHttp = new XMLHttpRequest();
    var url = '/getUser';


    xmlHttp.onreadystatechange = function () {


            var buttonLog = document.getElementById('buttonLog');

            var htmlResult = '<a href="MySite.html" class="btn btn-primary" role="button" aria-disabled="true">' + userName + '</a>';

            buttonLog.innerHTML(htmlResult);
            console.log('enter');

    };
    xmlHttp.open('GET', url, true);
    xmlHttp.send();
}