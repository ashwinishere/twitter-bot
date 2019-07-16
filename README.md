# **Twitter Bot with nodejs**  

### show some :heart:
[![GitHub stars](https://img.shields.io/github/stars/ashwinishere/twitter-bot.svg?style=social&label=Star)](https://github.com/ashwinishere/twitter-bot) [![GitHub forks](https://img.shields.io/github/forks/ashwinishere/twitter-bot.svg?style=social&label=Fork)](https://github.com/ashwinishere/twitter-bot/fork) [![GitHub watchers](https://img.shields.io/github/watchers/ashwinishere/twitter-bot.svg?style=social&label=Watch)](https://github.com/ashwinishere/twitter-bot) [![GitHub followers](https://img.shields.io/github/followers/ashwinishere.svg?style=social&label=Follow)](https://github.com/ashwinishere/twitter-bot)  
[![Twitter Follow](https://img.shields.io/twitter/follow/ashwinishere.svg?style=social)](https://twitter.com/eternally_l0st) 

Its a simple 33-line code twitter bot which can post tweets, retweet other tweets and fav tweets for specific topic with stream.

This is a bot which uses twitter stream API and Nodejs and i have hosted this on aws-free tier.
This is a simple bot , to build which i had to refer a lot of documents, blogs as most are not using the twitter stream api or where not updated.

> It reweets and likes on stream


## Installation

+ Install [Node.js](http://nodejs.org/)
+ Clone this repo
 
	```bash
	  git clone https://github.com/ashwinishere/twitter-bot.git
	```
+ Run 
	```bash
	npm install
	```

	> It will install [Twit](https://github.com/ttezel/twit), the library that lets us talk to Twitter.

## Connecting to Twitter

1. Register a Twitter account and also get its "app info".
	>Twitter doesn't allow you to register multiple twitter accounts on the same email address. I recommend you create a brand new email address (perhaps using Gmail) for the Twitter account. Once you register the account to that email address, wait for the confirmation email.

1. Now go [here](https://dev.twitter.com/apps/new) and log in as the Twitter account for your bot:
1. Fill up the form and submit.
1. Next once the submission completes you will be taken to a page which has the 
	+ "Settings" tab : Update details here
	+ "Permissons" tab :  Enable `Read and Write` 
	+ "Key and Access Token" tab : Click on `Create my access token`. 
1. Use the generated tokens in the "Key and Access Token" tab to fill the fields under the `config.js` file in your app directory.
	It should look like this:

	```javascript
	module.exports = {
	  consumer_key:         'blah',
	  consumer_secret:      'blah',
	  access_token:         'blah',
	  access_token_secret:  'blah'
	}
	```
1. Update the code under `bot.js` , with the your values. Best of all modify the code, tinker with it.
1. Now type the following in the command line in your project directory:

	```bash
	node bot.js
	```

Hopefully at this point you see a message like "Success! Check your bot, it should have retweeted something." 
Ok it won't say that, you have to code that in. Its simple as 

```javascript
console.log("Success! Check your bot, it should have retweeted something.");
```

Check the Twitter account for your bot, and it should have retweeted a tweet with the provided hashtag.


### **Note **

> Do not misuse the twitter api to spam or burden the server load for twitter api , as twitter follows a strict rule of closing down accounts that do that. Please read [here for the rules](https://support.twitter.com/articles/18311)

### Contribute
+ **Star** - If you like it
+ **Fork** - If you like to build your own version
+ **File an issue** - If you found a bug
+ **Send a pull request** - If you want to contribute

#### Credits
[Twit Library](https://github.com/ttezel/twit)


> If you found this bot helpful or you learned something from the source code and want to thank me, consider buying me a beer when we meet 🍻🍻

								**Peace out 🤘 Aswin Harikumar**