// Loads the library express which makes creating a server easy in a node application
var express = require('express');

// Loads the library body-parser which is used to parse requests
var bodyParser = require('body-parser');
// Loads the library multer which is used to handle file upload
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
        filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({storage: storage});

// Instantiate the "app" to start creating server endpoints
var app = express();
var fs = require('fs');
var path = require('path');

// Expose all files in public/ to be accessible from the root of our website
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); 

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

// Music submission endpoint
var fileUpload = upload.fields([{ name: 'audioSrc', maxCount: 1 }, { name: 'audioImageSrc', maxCount: 1 }]);
app.post('/', fileUpload, function(request, response) {
    if (request.files['audioSrc']) {
		request.body.audioSrc = request.files['audioSrc'][0].path.replace('public/', '');
    }
    if (request.files['audioImageSrc']) {
        request.body.audioImageSrc = request.files['audioImageSrc'][0].path.replace('public/', '');
    }
    request.body.albumName = null;
    request.body.albumCoverSrc = null;

    musicResources.push(request.body);
    response.render('home', {
        songs: musicResources
    });
});

// Temporarily keep songs in a variable
var musicResources = [];
// Helper methods for reading resource file
var readResources = function(callback) {
    fs.readFile(path.join(__dirname, 'resources.json'), {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            musicResources = JSON.parse(data);
            callback(musicResources);
        } else {
            console.log(err);
        }
    });
};