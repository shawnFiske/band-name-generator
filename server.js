'use strict';

// server api
var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective');
var Verb = require('./lib/verb');
var Noun = require('./lib/noun');
var getRandomWord = require('./lib/getRandomWord');
var postRandomWord = require('./lib/postRandomWord');

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

//end points
//root end point
app.get('/', function(req, res){
  res.sendFile('index.html');
});

//adjective end point
app.get('/adjective', function(req, res){
  res.json(getRandomWord(adjective));
});

//verb end point
app.get('/verb', function(req, res){
  res.json(getRandomWord(verb));
});

//noun end point
app.get('/noun', function(req, res){
  res.json(getRandomWord(noun));
});

//add adjective end point
app.post('/adjective', function(req, res){
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
});

//add verb end point
app.post('/verb', function(req, res){
  var word = postRandomWord(req.body.word, verb);
  res.json(word);
});

//add noun end point
app.post('/noun', function(req, res){
  var word = postRandomWord(req.body.word, noun);
  res.json(word);
});

//listen for requests on port
app.listen(port, function(){
  console.log('Server available at localhost: ' + port);
});