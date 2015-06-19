'use strict';

//creates an array of the objects properties
module.exports = function postFavoriteBand(string, object) {

  //check if the word exists
  if (object.hasOwnProperty(string)) {

    //if word does't exist, add to that object
    return {msg: 'Thanks for tying! We already have that band listed.', success: false};

  }else {
    object[string] = true;

    //if the word does exist, then send a nice message back
    return {msg: 'Thanks for the band, ' + string + ' as one of your favorites!', success: true};
  }
};
