const React = require('react');
const { Component } = React;

class WordChain extends Component {
  state = {
    text: 'Hello, webpack!',
  };

  render() {
    return <h2>{this.state.text}</h2>;
  }
}

module.exports = WordChain;
