const React = require('react');
const { connect } = require('react-redux');
const { updateTweetStorm } = require('../redux/actions/tweetStorm');
const DisplayTweets = require('./DisplayTweets');
const generateStormFromTweet = require('./utils/tweetStorm');

class TweetStorm extends React.Component {
  handleChange(event) {
    event.preventDefault();
    const { store } = this.context;
    const { tweet } = this.refs;
    const sanitizedTweet = tweet.value.replace(/\n\s+/g, '');
    const tweetStorm = generateStormFromTweet(sanitizedTweet);
    store.dispatch(
      updateTweetStorm(tweetStorm)
    );
  }

  componentDidMount() {
    this.refs.tweet.focus();
  }

  render() {
    return (
      <div className="tweetstorm-container">
        <form className="tweetstorm-form">
          <textarea
            ref="tweet"
            placeholder="Type your tweet here"
            onChange={ this.handleChange.bind(this) }
          />
        </form>
        <DisplayTweets />
      </div>
    );
  }
};

TweetStorm.contextTypes = {
  store: React.PropTypes.object
};

module.exports = TweetStorm;
