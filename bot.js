let Twit = require('twit');
let express = require('express');
let app = express();
let port = 3600;
let config = require('./config');
let T = new Twit({
    consumer_key:         config.CONSUMER_KEY,
    consumer_secret:      config.CONSUMER_SECRET,
    access_token:         config.ACCESS_TOKEN,
    access_token_secret:  config.ACCESS_TOKEN_SECRET,
});
app.all('/alive' ,(req, res) => {
    res.send('Hello World!🙌');
    // T.post('statuses/update', { status: 'Hello World!🙌' },(err,data,res) => {
    //     console.log(err,res,data);
    // });
});
let excludedSpamUsers =['622262193' , '846829598822154240', '1150739705467506689' , '957937607471546369', '1111666440044634112', '4900446473', '1054293194836455425', '738915032684077056', '737913984922353665', '3252320732', 
'738949795973189634', '739671459891548161'];
let hashTags = ['#angular', '#angular6', '#Angular'];
let stream = T.stream('statuses/filter', {track: hashTags});
stream.on('tweet', function (tweet) {
    if (excludedSpamUsers.indexOf(tweet.user.id_str)  == -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log('TWEETED');
        });
        T.post('favorites/create', { id: tweet.id_str }, function (err, data, response) {
            console.log('LIKED');
        });
    }
});
app.listen(port, () => console.log(`Bot app listening on port ${port}!`));