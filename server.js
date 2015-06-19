'use strict';

// server api
var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective');
var Verb = require('./lib/verb');
var Noun = require('./lib/noun');
var Favorites = require('./lib/favoriteNames');
var getRandomWord = require('./lib/getRandomWord');
var getFavoriteBandList = require('./lib/getFavoriteBandList');
var postRandomWord = require('./lib/postRandomWord');
var postFavoriteBand = require('./lib/postFavoriteBand');

//abstract express api to app
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//set port number - process.env.PORT node properity
var port = process.env.PORT || 3000;

//make files in app available
app.use(express.static(__dirname + '/app/'));

//instatiate Adjective object
var adjective = new Adjective();
var verb      = new Verb();
var noun      = new Noun();
var favorites = new Favorites();

//end points
//root end point
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

//adjective get end point
app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

//verb get end point
app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

//noun get end point
app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

//noun get end point
app.get('/favorite', function(req, res) {
  res.json(getFavoriteBandList(favorites));
});

//add adjective post end point
app.post('/adjective', function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
});

//add verb post end point
app.post('/verb', function(req, res) {
  var word = postRandomWord(req.body.word, verb);
  res.json(word);
});

//add noun post end point
app.post('/noun', function(req, res) {
  var word = postRandomWord(req.body.word, noun);
  res.json(word);
});

//add noun post end point
app.post('/favorite', function(req, res) {
  var word = postFavoriteBand(req.body.name, favorites);
  res.json(word);
});

//listen for requests on port
app.listen(port, function() {
  console.log('Server available at localhost: ' + port);
});
