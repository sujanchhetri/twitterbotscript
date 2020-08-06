console.log("Bot is started");

var twit = require('twit');
var config = require('./config/config');

var T = new twit(config);

reTweet();

setInterval(reTweet, 3600000);//runs every hour

// find latest tweet according the query 'q' in parameters
function reTweet() {
    var parameters = {
        q: '@suJJJan', 
        result_type: 'recent',
        lang: 'en'
    }

    T.get('search/tweets', parameters, function(err, data) {
        if (!err) {
            var retweetId = data.statuses[0].id_str;

            T.post('statuses/retweet/:id',{ id : retweetId },tweeted);

            function tweeted(err, response) {
                if (response) {
                    console.log('Retweeted successfully');
                }
                // if there was an error while tweeting 
                if (err) {
                    console.log('Duplicate tweet or Something went wrong');
                }
            }
        }
        else {
        console.log('Nothing found');
        }
    });
}

