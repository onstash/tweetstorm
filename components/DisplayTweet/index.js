const React = require('react');

module.exports = ({ tweet, index }) => {
  if (tweet) {
    return (
      <div className="tweetstorm-tweet">
        { `${tweet} (${index + 1}/n)` }
      </div>
    );
  } else {
    return <div className="tweetstorm-tweet" />;
  }
};
