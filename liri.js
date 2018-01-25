//Read and set any environment variable with the dotenv package
require("dotenv").config();
var Twitter = require('twitter');
var keys = require('./keys');
/*var spotify = new Spotify(keys.spotify);*/
var client = new Twitter(keys.twitter);
//liri commands: 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'
var params = {
	screen_name: 'Stark13Kate'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    console.log(tweets)

});


//my-tweets: get my last 20 tweets (get request by user)

//spotify-this-song: get [artist, song name, preview link, album song is from]; 
//if no song is chosen, it will default to "The Sign" by Ace of Base

//movie-this: will output [title, year relased, IMDb rating, Rotten Tomatoes rating, 
//contry it was produced, language, plot, actors];
//If user doesnt type in movie, will default to "Mr. Nobody"

//do-what-it-says will take text from random.txt and use it to call one of LIRIs commands.
//Will run spotify-this-song for "I Want it That Way"
