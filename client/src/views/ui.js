var Films = require('../models/films');

var UI = function(){
  var films = new Films();
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(li, review){
    this.appendText(li, review.comment, "Comment: ");
    this.appendText(li, review.rating, "Rating: ");
    this.appendText(li, review.author, "Author: ");
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var li = document.createElement("li");
      this.appendText(li, film.title, "Film: ");

      var li2 = document.createElement("li");
      this.appendText(li2, film.genre, "Genre: ");
      
      for(var review of film.reviews){
        this.createReview(li2, review);
      }
      container.appendChild(li);
      container.appendChild(li2);
    }
  }
}

module.exports = UI;