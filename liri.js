// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says
var Twitter = require('twitter');
var keys = require('./keys.js');

var userCommand = process.argv[2];
var userInput = process.argv[3];

var getTweets = function(){
	var client = new Twitter(keys.twitterKeys);

	var twitterParams = {screen_name: 'ndotherDim'};
	
	client.get('statuses/user_timeline', twitterParams, function(error, tweets, response){
		if (!error) {
			// console.log(tweets);
			for (i=0; i<tweets.length; i++){
				console.log(tweets[i].text)
			} 
		}
	});
}

var myTweets = function(){
	if (userCommand === "my-tweets"){
		getTweets();
	} else{ 
		console.log("Unknown commands.")
	}
}

var findSpotify = function(songName){
	spotify.search({

	})
}

var getMovie = function(){
	request('http://www.omdbapi.com/?t=' + userInput + '&plot=short&y=&r=json&apikey=40e9cece', 
		function (error, response, body){
			if (!error && response.statusCode == 200){
				if (userCommand === "movie-this"){
					var jsonData = JSON.parse(body);
					console.log('Title: ' + jsonData.Title);
					console.log('Release Year: ' + jsonData.Year);
					console.log('Rated: ' + jsonData.Rated);
					console.log('Plot: ' + jsonData.Plot);
					console.log('Actors: ' + jsonData.Actors);
					console.log('IMDB Rating: ' + jsonData.imdbRating);
					console.log('Rotten Tomatoes Rating: ' + jsonData.tomatoRating);
				}
			}
		});

}
// What Each Command Should Do

// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.
// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
// Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
// Step One: Visit https://developer.spotify.com/my-applications/#!/
// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package. See the
// node liri.js movie-this '<movie name here>'
// This will output the following information to your terminal/bash window:
//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use 40e9cece.
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
// BONUS
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.
