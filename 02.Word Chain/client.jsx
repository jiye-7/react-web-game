const React = require('react'); // node의 module system으로 npm에 설치한 것을 불러올 수 있다.
const ReactDOM = require('react-dom');

const WordChain = require('./WordChain');

ReactDOM.render(<WordChain />, document.querySelector('#root'));
