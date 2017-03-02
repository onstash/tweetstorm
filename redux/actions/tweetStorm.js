const actionConstants = require('../action-constants');

module.exports = {
  updateTweetStorm: tweetStorm => {
    return {
      type: actionConstants.tweetStorm.UPDATE,
      data: tweetStorm
    };
  }
};
