'use strict';

$('#getBandName').on('click', function() {

  $.get('/adjective', function(response) {

    var adjective = response.word;
    $('#adjective').text(capitalizeWord(adjective));
  });

  $.get('/verb', function(response) {

    var verb = response.word;
    $('#verb').text(capitalizeWord(verb));
  });

  $.get('/noun', function(response) {

    var noun = response.word;
    $('#noun').text(capitalizeWord(noun));
  });

  $('#msg p').empty();
  $('#bandselected').empty();
});

function capitalizeWord(word) {

  var newWord = word;
  newWord = newWord.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });

  return newWord;
}

$('#submitWords').on('submit', function(e) {
  e.preventDefault();

  var adjective = $('input[name=adjective]').val();
  var adjPost;

  var verb = $('input[name=verb]').val();
  var verbPost;

  var noun = $('input[name=noun]').val();
  var nounPost;

  //console.log(adjective +" : "+ verb +" : "+ noun)
  $('#msg p').empty();
  $('#bandselected').empty();

  if (adjective) {

    adjPost = {word: adjective};

    $.post('adjective', adjPost, function(response) {
      var adjectiveRes = response.msg;
      $('#wordAdj').text(adjectiveRes);
      $('input[name=adjective]').val('');
    });
  }

  if (verb) {

    verbPost = {word: verb};
    $.post('verb', verbPost, function(response) {

      var verbRes = response.msg;
      $('#wordVerb').text(verbRes);
      $('input[name=verb]').val('');

    });
  }

  if (noun) {
    nounPost = {word: noun};
    $.post('noun', nounPost, function(response) {

      var nounRes = response.msg;
      $('#wordNoun').text(nounRes);
      $('input[name=noun]').val('');

    });
  }
});

$('#favorite').on('click', function(e) {
  e.preventDefault();

  var adjective = $('#adjective').text();
  var verb      = $('#verb').text();
  var noun      = $('#noun').text();

  console.log(adjective + ' : ' + verb + ' : ' + noun);

  if (adjective.length > 0 && verb.length > 0 && noun.length > 0) {

    var favoritePost = {name: adjective + ' ' + verb + ' ' + noun};
    $.post('favorite', favoritePost, function(response) {

      var favoriteRes = response.msg;

      $('#bandselected').text(favoriteRes);
    });
  }

  getFavoriteList();
});

function getFavoriteList() {
  $.get('/favorite', function(response) {
    var favoriteList = response.list;

    $('#bandlist').empty();
    for (var i = 0; i < favoriteList.length; i++) {
      $('#bandlist').append('<li>' + favoriteList[i] + '</li>');
    }

    console.log(favoriteList);
  });
}

getFavoriteList();
