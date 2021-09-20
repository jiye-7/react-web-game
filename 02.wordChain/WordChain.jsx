const React, {Component} = require('react');

class WordChain extends Component {
  state = {
    word: '스피커',
    value: '',
    result: '',
  }

  render() {
    return (
      <>
        <h3>단어: {}</h3>
      </>
    );
  }
}

module.exports =  WordChain;