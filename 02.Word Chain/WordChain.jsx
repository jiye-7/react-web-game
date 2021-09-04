const React = require('react');
const { Component } = React;

class WordChain extends Component {
  state = {
    word: '카메라',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    // 끝말잇기 로직
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        value: '',
        result: '통과!',
      });
      this.input.focus();
    } else {
      this.setState({
        value: '',
        result: '땡!',
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value }); // currentTarget 차이
  };

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h3>단어: {this.state.word}</h3>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
            type='text'
          />
          <button>확인</button>
        </form>
        <div>결과는: {this.state.result}</div>
      </>
    );
  }
}

module.exports = WordChain;
