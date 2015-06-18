'use strict'

//creates an array of the objects properties
module.exports = function postRandomWord(word, object) {
  //check if the word exists
  if(object.hasOwnProperty(word)) {
    //if word does't exist, add to that object
    return {msg: 'Thanks for tying! We already have that word.', success: false};
  }else{
    object[word] = true;
    //if the word does exist, then send a nice message back
    return {msg: 'Thanks for submitting your awesome word, ' + word + '!', success: true};
  }
};