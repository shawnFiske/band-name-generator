
$('#getBandName').on('click',function(){
  $.get("https://shrouded-cliffs-3732.herokuapp.com/adjective", function(response){
    var adjective = response.word;
    $('#adjective').text(capitalizeWord(adjective));
  });

  $.get("https://shrouded-cliffs-3732.herokuapp.com/verb", function(response){
    var verb = response.word;
    $('#verb').text(capitalizeWord(verb));
  });

  $.get("https://shrouded-cliffs-3732.herokuapp.com/noun", function(response){
    var noun = response.word;
    $('#noun').text(capitalizeWord(noun));
  });

  $('input[".textBox"]').val('');
});

function capitalizeWord(word){
  var newWord = word;
  newWord = newWord.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  
  return newWord;
}

$('#submitWords').on('submit', function(e){
  e.preventDefault();
  var adjective = $('input[name=adjective]').val();
  var adjPost;

  var verb = $('input[name=verb]').val();
  var verbPost;

  var noun = $('input[name=noun]').val();
  var nounPost;

  //console.log(adjective +" : "+ verb +" : "+ noun)

  if(adjective){
    adjPost = {word: adjective};
    $.post('adjective', adjPost, function(response){
      var adjectiveRes = response.msg;
      $('#wordAdj').text(adjectiveRes);
      $('input[name=adjective]').val('');
    });
  }

  if(verb){
    verbPost = {word: verb};
    $.post('verb', verbPost, function(response){
      var verbRes = response.msg;
      $('#wordVerb').text(verbRes);
      $('input[name=verb]').val('');
    });
  }

  if(noun){
    nounPost = {word: noun};
    $.post('noun', nounPost, function(response){
      var nounRes = response.msg;
      $('#wordNoun').text(nounRes);
      $('input[name=noun]').val('');
    });
  }
  //console.log(adjectiveRes);
});