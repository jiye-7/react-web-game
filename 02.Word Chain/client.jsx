const React = require('react'); // node의 module system으로 npm에 설치한 것을 불러올 수 있다.
const ReactDOM = require('react-dom');

const WordChain = require('./WordChain');
const WordChainHooks = require('./WordChainHooks');

ReactDOM.render(<WordChainHooks />, document.querySelector('#root'));
