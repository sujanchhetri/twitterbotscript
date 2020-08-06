console.log("Bot is starting")
var config = require('./config/config')
var Twit = require('twit');

var T = new Twit(config);

tweetThis();

//setInterval(tweetThis,3600000)//every 1 hour


function tweetThis() {
    var statsArray = ["hello","How ya doin","I love node"];
    //selects random tweets from the array
    var stat = statsArray[Math.floor(Math.random()*statsArray.length)]

    var tweet = {
    status: stat
    }

T.post('statuses/update',tweet,tweeted);

function tweeted (err, data, response) {
    if(err){
        console.log("Something is wrong")
    }else{
        console.log("Works fine")
    }
} 
}


