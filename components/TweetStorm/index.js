const React = require('react');
const { connect } = require('react-redux');
const { updateTweetStorm } = require('../../redux/actions/tweetStorm');
const DisplayTweets = require('../DisplayTweets');
const generateStormFromTweet = require('../utils/tweetStorm');
require('./styles.scss');

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
      <div className="outer-container">
        <h2 className="heading">TWEETSTORM GENERATOR</h2>
        <div className="content">
          <div className="sub-headings">
            <h3 className="sub-heading">TWEET</h3>
            <h3 className="sub-heading">TWEETSTORM</h3>
          </div>
          <div className="contents">
            <div className="tweet">
              <textarea
                ref="tweet"
                placeholder="Type your tweet here"
                onChange={ this.handleChange.bind(this) }
              />
            </div>
            <div className="tweetstorm">
              <DisplayTweets />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

TweetStorm.contextTypes = {
  store: React.PropTypes.object
};

module.exports = TweetStorm;
