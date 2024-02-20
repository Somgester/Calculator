import React, { useState } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [output, setOutput] = useState('');

  const handleClick = (event) => {
    const buttonValue = event.target.value;

    if (buttonValue === '=') {
      setOutput(eval(output));
    } else if (buttonValue === 'AC') {
      setOutput('');
    } else {
      setOutput(output + buttonValue);
    }
  };

  return (
    <div className="calculator">
      <input type="text" id="result" value={output} readOnly />
      <div className="buttons">
        <button type="button" value="AC" onClick={handleClick}>AC</button>
        <button type="button" value="DEL" onClick={handleClick}>DEL</button>
        <button type="button" value="." onClick={handleClick}>.</button>
        <button type="button" value="/" onClick={handleClick}>/</button>
        <button type="button" value="7" onClick={handleClick}>7</button>
        <button type="button" value="8" onClick={handleClick}>8</button>
        <button type="button" value="9" onClick={handleClick}>9</button>
        <button type="button" value="-" onClick={handleClick}>-</button>
        <button type="button" value="4" onClick={handleClick}>4</button>
        <button type="button" value="5" onClick={handleClick}>5</button>
        <button type="button" value="6" onClick={handleClick}>6</button>
        <button type="button" value="*" onClick={handleClick}>*</button>
        <button type="button" value="1" onClick={handleClick}>1</button>
        <button type="button" value="2" onClick={handleClick}>2</button>
        <button type="button" value="3" onClick={handleClick}>3</button>
        <button type="button" value="+" onClick={handleClick}>+</button>
        <button type="button" value="0" onClick={handleClick}>0</button>
        <button type="button" value="00" onClick={handleClick}>00</button>
        <button type="button" value="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
