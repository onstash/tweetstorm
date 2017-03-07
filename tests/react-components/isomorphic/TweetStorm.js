const test = require('tape-catch');
const React = require('react');
const { shallow, render } = require('enzyme');
const proxyquire = require('proxyquire');

const DisplayTweetStub = () => proxyquire(
  '../../../components/DisplayTweet',
  { './styles.scss': {} }
);
const DisplayTweetsStub = proxyquire(
  '../../../components/DisplayTweets',
  { '../DisplayTweet': DisplayTweetStub }
).Internal;
const TweetStorm = proxyquire(
  '../../../components/TweetStorm',
  {
    './styles.scss': {},
    '../DisplayTweets': DisplayTweetsStub
  }
);

test('React Component - shallow(TweetStorm)', testCase => {
  const component = shallow(<TweetStorm />);
  const componentInstance = component.instance();
  const expectedComponent = (
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
              onChange={ componentInstance.handleChange }
            />
          </div>
          <div className="tweetstorm">
            <DisplayTweetsStub />
          </div>
        </div>
      </div>
    </div>
  );
  testCase.ok(
    component.equals(
      expectedComponent,
    ),
    'TweetStorm component is shallow rendering as expected'
  );
  testCase.end();
});

test('React Component - markup(TweetStorm)', testCase => {
  const cheerioWrapper = render(<TweetStorm />);
  testCase.deepEqual(
    cheerioWrapper.html(),
    `<div class="outer-container">
      <h2 class="heading">
        TWEETSTORM GENERATOR
      </h2>
      <div class="content">
        <div class="sub-headings">
          <h3 class="sub-heading">
            TWEET
          </h3>
          <h3 class="sub-heading">
            TWEETSTORM
          </h3>
        </div>
        <div class="contents">
          <div class="tweet">
            <textarea placeholder="Type your tweet here"></textarea>
          </div>
          <div class="tweetstorm">
            <div class="tweetstorm-tweets-container"></div>
          </div>
        </div>
      </div>
    </div>`.replace(/\n\s+/g, ''),
    'TweetStorm is rendering HTML as expected'
  );
  testCase.end();
});
