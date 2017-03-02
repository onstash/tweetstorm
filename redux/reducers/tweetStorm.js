const actionConstants = require('../action-constants');
const { List } = require('immutable');

const defaultState = List([]);

const tweetStorm = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.tweetStorm.UPDATE:
      return List(action.data);
      break;
    default:
      return state;
  }
};

module.exports = tweetStorm;
