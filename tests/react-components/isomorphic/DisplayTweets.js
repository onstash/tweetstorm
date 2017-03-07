const test = require('tape-catch');
const React = require('react');
const { shallow, render } = require('enzyme');
const proxyquire = require('proxyquire');

const DisplayTweetStub = ({ index, tweet }) => {
  return <div className="display-tweet-stub" index={ index } tweet={ tweet } />;
};
const DisplayTweets = proxyquire(
  '../../../components/DisplayTweets',
  { '../DisplayTweet': DisplayTweetStub }
).Internal;

test('React Component - shallow(DisplayTweets) - placeholder', testCase => {
  const component = shallow(<DisplayTweets />);
  const expectedComponent = (
    <div className="tweetstorm-tweets-container" />
  );
  testCase.ok(
    component.equals(
      expectedComponent
    ),
    'DisplayTweets is shallow rendering placeholder component as expected'
  );
  testCase.end();
});

test('React Component - shallow(DisplayTweets) - passing', testCase => {
  const tweetsStub = ['foo', 'bar'];
  const component = shallow(<DisplayTweets tweets={ tweetsStub }/>);
  const expectedComponent = (
    <div className="tweetstorm-tweets-container">
      <DisplayTweetStub tweet="foo" index={0} />
      <DisplayTweetStub tweet="bar" index={1} />
    </div>
  );
  testCase.ok(
    component.equals(
      expectedComponent
    ),
    'DisplayTweets is shallow rendering component with tweets as expected'
  );
  testCase.end();
});

test('React Component - markup(DisplayTweets) - placeholder', testCase => {
  const cheerioWrapper = render(<DisplayTweets />);
  testCase.deepEqual(
    cheerioWrapper.html(),
    `<div class="tweetstorm-tweets-container"></div>`,
    'DisplayTweets is rendering placeholder HTML as expected'
  );
  testCase.end();
});

test('React Component - markup(DisplayTweets) - passing', testCase => {
  const tweetsStub = ['foo', 'bar'];
  const cheerioWrapper = render(<DisplayTweets tweets={ tweetsStub }/>);
  testCase.deepEqual(
    cheerioWrapper.html(),
    `<div class="tweetstorm-tweets-container">
      <div class="display-tweet-stub"></div>
      <div class="display-tweet-stub"></div>
    </div>`.replace(/\n\s+/g, ""),
    'DisplayTweets is rendering HTML with tweets as expected'
  );
  testCase.end();
});
