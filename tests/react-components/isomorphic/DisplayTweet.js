const test = require('tape-catch');
const React = require('react');
const { shallow, render } = require('enzyme');

const DisplayTweet = require('../../../components/DisplayTweet');

test('React Component - shallow(DisplayTweet) - placeholder', testCase => {
  const component = shallow(<DisplayTweet />);
  const expectedComponent = <div className="tweetstorm-tweet" />;
  testCase.ok(
    component.equals(
      expectedComponent
    ),
    'DisplayTweet is shallow rendering placeholder component as expected'
  );
  testCase.end();
});

test('React Component - shallow(DisplayTweet) - passing', testCase => {
  const tweetStub = "Hello world";
  const indexStub = 0;
  const component = shallow(
    <DisplayTweet tweet={ tweetStub } index={ indexStub }/>
  );
  const expectedComponent = (
    <div className="tweetstorm-tweet">
      { `${tweetStub} (${indexStub + 1}/n)` }
    </div>
  );
  testCase.ok(
    component.equals(
      expectedComponent
    ),
    'DisplayTweet is shallow rendering component with tweet as expected'
  );
  testCase.end();
});

test('React Component - markup(DisplayTweet) - placeholder', testCase => {
  const cheerioWrapper = render(<DisplayTweet />);
  testCase.deepEqual(
    cheerioWrapper.html(),
    `<div class="tweetstorm-tweet"></div>`,
    'DisplayTweet is rendering placeholder HTML as expected'
  );
  testCase.end();
});

test('React Component - markup(DisplayTweet) - passing', testCase => {
  const tweetStub = "Hello world";
  const indexStub = 0;
  const cheerioWrapper = render(
    <DisplayTweet tweet={ tweetStub } index={ indexStub }/>
  );
  testCase.deepEqual(
    cheerioWrapper.html(),
    `<div class="tweetstorm-tweet">Hello world (1/n)</div>`,
    'DisplayTweet is rendering HTML with tweet as expected'
  );
  testCase.end();
});
