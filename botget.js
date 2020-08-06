console.log("Bot is starting")
var config = require('./config/config')
var Twit = require('twit');

var T = new Twit(config);

var parameters = {
    q : 'suJJJan',
    count : 2
}

//  search twitter for all tweets containing the word 'suJJJan' 
T.get('search/tweets',parameters,fetchData); 

function fetchData (err, data, response) {
    var tweets = data.statuses;
    for(var i=0;i< tweets.length;i++){
        console.log(tweets[i].text);
    }
    console.log(data)
} 



