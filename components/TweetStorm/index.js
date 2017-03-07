const React = require('react');
const { updateTweetStorm } = require('../../redux/actions/tweetStorm');
const DisplayTweets = require('../DisplayTweets');
const generateStormFromTweet = require('../utils/tweetStorm');

const handleChange = event => {
  event.preventDefault();
  const { store } = this.context;
  const { tweet } = this.refs;
  const sanitizedTweet = tweet.value.replace(/\n\s+/g, '');
  const tweetStorm = generateStormFromTweet(sanitizedTweet);
  store.dispatch(
    updateTweetStorm(tweetStorm)
  );
};


class TweetStorm extends React.Component {
  constructor() {
    super();
    this.handleChange = handleChange.bind(this);
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
                onChange={ this.handleChange }
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
