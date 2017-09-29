// Loads the library express which makes creating a server easy in a node application
var express = require('express');

// Instantiate the "app" to start creating server endpoints
var app = express();
var fs = require('fs');
var path = require('path');

// Expose all files in public/ to be accessible from the root of our website
app.use(express.static('public'));

var Handlebars = require('hbs');
Handlebars.registerHelper('json', function(context) {
	return JSON.stringify(context).replace(/"/g, '&quot;');
});
app.set('view engine', 'hbs');

// Server listens to port 3000
app.listen(3000, function () {
	console.log('Your app is listening on port 3000!');
});

// Root web app endpoint
app.get('/', function (request, response) {
	readResources(function(musicResources) {
		response.render('home', {
			songs: musicResources
		});
	});
});


// Helper methods for reading resource file
var readResources = function(callback) {
	fs.readFile(path.join(__dirname, 'resources.json'), {encoding: 'utf-8'}, function(err,data){
	    if (!err) {
	        var musicResources = JSON.parse(data);
	        callback(musicResources);
	    } else {
	        console.log(err);
	    }
	});
};