function getCards() {
    var xmlHttp = new XMLHttpRequest();
    var url = '/getCards';


    xmlHttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            var cards = JSON.parse(this.responseText);
            var cardDeck = document.getElementById('cardDeck');

            var htmlCardResult = "";

            var cardCount = cards.length-1;
            while(cardCount%3!=0){
                cardCount+=1;
            }
            var count =  0;


            for (var i = 0; i<cardCount; i++){
                if(i%3 == 0){
                    htmlCardResult += '<div class="card-deck" style="padding-top: 30px">';
                }
                count+=1;
                if(cards[i+1] == undefined){
                    htmlCardResult += '<div class="card" style="border-color: transparent"></div>';
                    continue;
                }
                htmlCardResult +=    '<div class="card">';
                htmlCardResult +=    '    <a href="' + cards[i].href + '" target="_blank">';
                htmlCardResult +=    '    <img class="card-img-top" src="' + cards[i].cardImageTop + '" alt="' +cards[i].cardTitle +' ">';
                htmlCardResult +=    '    </a>';
                htmlCardResult +=    '   <div class="card-body">';
                htmlCardResult +=    '    <h5 class="card-title">' + cards[i].cardTitle +'</h5>';
                htmlCardResult +=    ' <p class="card-text">' + cards[i].cardText + '</p>';
                htmlCardResult +=    '<p class="card-text">';
                htmlCardResult +=    '   <small class="text-muted">' + cards[i].textMuted + '</small>';
                htmlCardResult +=    ' </p>';
                htmlCardResult +=    ' </div>';
                htmlCardResult +=    '</div>';
                if(count == 3 || i == cardCount-1){
                    htmlCardResult += '</div>';
                    count = 0;
                }
            }


            cardDeck.innerHTML = htmlCardResult;
        }
    };

    xmlHttp.open('GET', url, true);
    xmlHttp.send();
}