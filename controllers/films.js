//since we don't have a database we'll use our front end models at the moment

//  res.sendFile( __dirname + '/index.html' )

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

filmRouter.post('/', function(req, res){ //add
  films.push ( req.body.film )
  res.json(films)
})

filmRouter.get( '/', function(req, res){ //all
  res.json(films)
})

filmRouter.get('/:id', function(req, res){ //single
  var film = films[ req.params.id ]
  res.json({film: film})
})

filmRouter.delete('/:id', function(req, res){ //delete
  films.splice(req.params.id, 1)
  res.json(films)
})

filmRouter.put('/:id', function(req, res){ //update
  var updatedFilm = req.body.film
  films[req.params.id] = updatedFilm
  res.json(films)
})


module.exports = filmRouter;
