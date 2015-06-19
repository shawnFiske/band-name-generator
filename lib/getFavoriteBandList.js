'use strict';

//creates an array of the objects properties
module.exports = function getFavoriteBandList(object) {
  var propArray = Object.keys(object);
  return {list: propArray};
};
