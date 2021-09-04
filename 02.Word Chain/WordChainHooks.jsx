const React = require('react');
const WordChain = require('./WordChain');
const { Component, useState, useRef } = React;

const WordChainHooks = () => {
  const [word, setWord] = useState('마우스');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('통과!');
      inputRef.focus();
    } else {
      setValue('');
      setResult('땡!');
      inputRef.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h3>단어: {word}</h3>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type='text'
        />
        <button>확인</button>
      </form>
      <div>결과: {result}</div>
    </>
  );
};

module.exports = WordChainHooks;
