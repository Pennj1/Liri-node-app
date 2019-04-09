var axios = require("axios");
var keys = require ("keys.js");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=finding+nemo&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);