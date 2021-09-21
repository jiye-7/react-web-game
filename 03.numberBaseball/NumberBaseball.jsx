const React = require('react');
const { Component } = React;

// 숫자 4개를 겹치치 않게 랜덤으로 만드는 함수
const getNumbers = () => {
  let numbers = Math.floor(Math.random() * 4);
  console.log(numbers);
};

class NumberBaseball extends Component {
  state = {
    number: [1, 3, 5, 7],
    value: '',
    ball: 0,
    strike: 0,
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.state.value.split('').map((el, idx) => {
      // getNumbers();
      if (+el === this.state.number[idx]) {
        console.log(+el);
        console.log(this.state.number[idx]);
        this.setState({
          value: '',
          strike: this.state.strike + 1,
          tries: [...this.state.tries, this.state.value],
        });
        this.input.focus();
      } else {
        console.log('같지 않음');
        this.setState({
          value: '',
          ball: this.state.ball + 1,
          tries: [...this.state.tries, this.state.value],
        });
      }
    });
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onRefInput = (i) => (this.input = i);

  render() {
    return (
      <>
        <div>
          {this.state.strike} 스트라이크 {this.state.ball}볼 입니다.
        </div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor='num'>숫자 입력</label>
          <input
            maxLength={4}
            id='num'
            type='text'
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button type='submit'>입력 :)</button>
        </form>
        <div>시도한 횟수: {this.state.tries}</div>
        <ul>
          시도한 결과 :{this.state.tries.length}
          {this.state.tries.map((el, idx) => {
            return <li key={idx}>{el}</li>;
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseball;
