const React = require('react');
const { useState, useRef } = React;

const WordChainHooks = () => {
  const [word, setWord] = useState('선풍기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('통과!');
      inputRef.current.focus();
    } else {
      setValue('');
      setResult('땡!');
      inputRef.current.focus();
    }
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h3>단어: {word}</h3>
      <form onSubmit={onSubmitForm}>
        <label id='' htmlFor='wordInput'>
          단어를 입력하세요
        </label>
        <input
          id='wordInput'
          type='text'
          ref={inputRef}
          value={value}
          onChange={onChangeValue}
        />
        <button type='submit'>확인</button>
      </form>
      <div>결과: {result}</div>
    </>
  );
};

module.exports = WordChainHooks;
