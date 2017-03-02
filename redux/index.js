const { combineReducers } = require('redux');
const tweetStorm = require('./reducers/tweetStorm');

module.exports = combineReducers({
  tweetStorm
});
