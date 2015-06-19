'use strict';

//creates an array of the objects properties
module.exports = function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];

  return {word: randomProp};
};
