const sentencePattern = new RegExp(/([.?!])\s*(?=[A-Z])/g);
const sentenceSplitter = text => {
  return text.replace(sentencePattern, "$1|").split("|");
};

const generateStormFromTweet = tweet => {
  const tweetStormTweets = [];
  const sentences = sentenceSplitter(tweet);
  sentences.map(sentence => {
    const sentenceLength = sentence.length;
    if (sentenceLength < 134) {
      const lastSentence = tweetStormTweets[tweetStormTweets.length - 1];
      if (lastSentence) {
        if (lastSentence.length + sentenceLength < 134) {
          const newSentence = `${lastSentence} ${sentence}`;
          tweetStormTweets[tweetStormTweets.length - 1] = newSentence;
        } else {
          tweetStormTweets.push(sentence);
        }
      } else {
        tweetStormTweets.push(sentence);
      }
    } else {
      const _sentences = sentence.match(/[\s\S]{1, 70}/g);
      _sentences.map((_sentence, index) => {
        if (!index) {
          tweetStormTweets.push(`${_sentence}...`);
        } else {
          tweetStormTweets.push(`...${_sentence}...`);
        }
      });
    }
  });
  return tweetStormTweets;
};

module.exports = generateStormFromTweet;
