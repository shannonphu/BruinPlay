// Loads the library express which makes creating a server easy in a node application
var express = require('express');

// Instantiate the "app" to start creating server endpoints
var app = express();
var fs = require('fs');
var path = require('path');

app.set('view engine', 'hbs');

// Server listens to port 3000
app.listen(3000, function () {
	console.log('Your app is listening on port 3000!');
});

// Root web app endpoint
app.get('/', function (request, response) {
	var musicResources = readResources();
	response.render('home', {
		songs: musicResources
	});
});


// Helper methods for reading resource file
// TODO: async reading causing undefined to be returned before fs.readFile
//       fix with callback?
var readResources = function() {
	fs.readFile(path.join(__dirname, 'resources.json'), {encoding: 'utf-8'}, function(err,data){
	    if (!err) {
	        var musicResources = JSON.parse(data);
	        console.log(musicResources);
	        return musicResources;
	    } else {
	        console.log(err);
	    }
	});
};