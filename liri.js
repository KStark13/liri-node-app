//Read and set any environment variable with the dotenv package
require("dotenv").config();
var keys = require('./keys');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

//Arguments Array
var nodeArgV = process.argv;
var command = process.argv[2];

//variable for the movie or song search
var x = "";

//attaches multiple word arguents
for (var i = 3; i < nodeArgV.length; i++) {
	if(i>3 && i<nodeArgV.length) {
		x = x + "+" + nodeArgV[i];
	} else{
		x = x + nodeArgV[i];
	}
}
//Switch Commands: 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'
switch(command){
	case "my-tweets":
		showTweets();
	break;

	case "spotify-this-song":
		if(x) {
			spotifySong(x);
		} else {
			spotifySong("The Sign");
		}
	break;

	case "movie-this":
		if(x) {
			omdbData(x);
		} else {
			omdbData("Mr. Nobody")
		}
	break;

	case "do-what-it-says":
		doThing();
	break;

	default:
	console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}")

}


//my-tweets: get my last 20 tweets (get request by user)
function showTweets() {
	var client = new Twitter(keys.twitter);
var params= {
	screen_name: 'Stark13Kate' 
};
client.get('statuses/user_timeline', params, gotData);

function gotData (error, tweets, response) {
    for ( var i = 0; i < tweets.length; i++) {
    	var created = tweets[i].created_at;
    	var message = tweets[i].text;
    	console.log("-------------------")
    	console.log("Date: " + created.substring(0, 16));
    	console.log("Tweet: " + message);
    };	 
};
}



//spotify-this-song: get [artist, song name, preview link, album song is from]; 
//if no song is chosen, it will default to "The Sign" by Ace of Base
function spotifySong(song) {
	var spotify = new Spotify(keys.spotify);
	spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
	for (var i = 0; i < data.tracks.items.length; i++) {
	var songData = data.tracks.items[i];
	console.log("Artist: " + songData.artists[0].name);
	console.log("Song Title: " + songData.name);
	console.log("Preview Link: " + songData.preview_url);
	console.log("Album: " + songData.album.name)
	}
});
}




//movie-this: will output [title, year relased, IMDb rating, Rotten Tomatoes rating, 
//contry it was produced, language, plot, actors];
//If user doesnt type in movie, will default to "Mr. Nobody"
function omdbData(movie){
		var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true&apikey=trilogy';
request(omdbURL, function(error, response, body){
	var body = JSON.parse(body);

console.log("Title: " + body.Title);
console.log("Release Year: " + body.Year);
console.log("IMDb Rating: " + body.imdbRating);
console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
console.log("Country: " + body.Country);
console.log("Language: " + body.Language);
console.log("Plot: " + body.Plot);
console.log("Actors: " + body.Actors);
});
}
//do-what-it-says will take text from random.txt and use it to call one of LIRIs commands.
//Will run spotify-this-song for "I Want it That Way"
function doThing(){
	fs.readFile('random.txt', "utf8", function(error, data){
	var txt = data.split(",");
	
	spotifySong(txt[1]);
})
}
