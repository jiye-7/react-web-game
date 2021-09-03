const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  const [num1, setNumber1] = useState(Math.ceil(Math.random() * 9));
  const [num2, setNumber2] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (num1 * num2 === parseInt(value)) {
      // setState를 아래에서 4번을 해도 react가 알아서 처리해준다. 렌더가 1번 발생함 -> setState를 모아서 한 번에 처리한다.(비동기)
      setNumber1(Math.ceil(Math.random() * 9));
      setNumber2(Math.ceil(Math.random() * 9));
      setValue('');
      setResult((prevResult) => `정답입니다! :) ${value}`); // state안에 함수를 넣는 이유: 이전 state값을 가져와서 새 state를 만드는 경우 -> 옛날 state를 가져와야 state 비동기문제가 발생하지 않는다.
      inputRef.current.focus();
    } else {
      setValue('');
      setResult('틀렸습니다. :(');
      inputRef.current.focus();
    }
  };

  const onInputChange = (e) => setValue(e.target.value);

  return (
    <>
      <h3>
        {num1} 곱하기 {num2} 는?
      </h3>
      <form onSubmit={onSubmitForm}>
        <input
          type='number'
          ref={inputRef}
          value={value}
          onChange={onInputChange}
        />
        <button type='submit'>확인</button>
      </form>
      <div>결과: {result}</div>
    </>
  );
};

module.exports = GuGuDan;
