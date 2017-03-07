const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const { Provider } = require('react-redux');

const appReducers = require('./redux');
const TweetStorm = require('./components/TweetStorm');

const store = createStore(appReducers, {});

const App = () => {
  require('./components/styles');
  return (
    <Provider store={ store }>
      <TweetStorm />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('react'));
