const React = require('react');
const { connect } = require('react-redux');

const DisplayTweet = ({ tweet, index }) => {
  if (tweet) {
    return (
      <div className="tweetstorm-tweet">
      { `${tweet} (${index + 1}/n)` }
      </div>
    );
  }
  else {
    return <div className="tweetstorm-tweet" />;
  }
};

const DisplayTweets = ({ tweets }) => {
  if (tweets) {
    return (
      <div className="tweetstorm-tweets">
      Tweets:
      {
        tweets.map((tweet, index) => {
          return (<DisplayTweet tweet={ tweet } key={ index } index={ index }/>);
        })
      }
      </div>
    );
  } else {
    return (
      <div className="tweetstorm-tweets" />
    );
  }
};

const mapStateToProps = state => {
  return {
    tweets: state.tweetStorm
  };
};

module.exports = connect(mapStateToProps, null)(DisplayTweets);
