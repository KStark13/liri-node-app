# liri-node-app

Week 12 (LIRI Bot) Assignment

Created during Week 12 of SMU Coding Bootcamp. The challenge was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

  * `my-tweets`

  * `spotify-this-song`

  * `movie-this`

  * `do-what-it-says`

## Getting Started

- Clone down repo.
- Run command 'npm install' in Terminal or GitBash
- Run command 'node liri.js' or one of the commands below.

## What Each Command Does
![liri1](https://user-images.githubusercontent.com/29615183/39401420-8d5629a4-4b0a-11e8-9b33-cfe127ea61ef.PNG)
1. `node liri.js my-tweets`

  * Displays my last 20 tweets and when they were created in terminal/bash window.

![liri2](https://user-images.githubusercontent.com/29615183/39401424-a95c6974-4b0a-11e8-8c4a-b1ab25ba6d79.PNG)


2. `node liri.js spotify-this-song <song name>`

  * Shows the following information about the song in terminal/bash window.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

  * Or if no song is passed through, it will default to
    *"Lazy Eye" by Silversun Pickups
    
![liri3](https://user-images.githubusercontent.com/29615183/39401425-aec45b9c-4b0a-11e8-8323-baa33d5a05c3.PNG)

3. `node liri.js movie-this <movie name>`

  * Shows the following information in terminal/bash.

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * Rotten Tomatoes Rating.
    * Rotten Tomatoes URL.

  * Or if no movie is passed through, it will default to "Mr. Nobody"

![liri5](https://user-images.githubusercontent.com/29615183/39401432-cb0d61cc-4b0a-11e8-860c-53bb27e5c366.png)

4. `node liri.js do-what-it-says`

  * Takes the text from random.txt and runs the song through spotify-this-song command

## Demo
 <video src="demo.mp4" width="320" height="200" controls preload></video>

## Tech used
- Node.js
- Twitter NPM Package - https://www.npmjs.com/package/twitter
- Spotify NPM Package - https://www.npmjs.com/package/spotify
- Request NPM Package - https://www.npmjs.com/package/request

## Prerequisites
```
- Node.js - Download the latest version of Node https://nodejs.org/en/
```

## Built With

* Sublime Text - Text Editor

## Authors

* **Kate Stark** - *Node JS* - [Kate Stark]
