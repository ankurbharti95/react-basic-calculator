import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '+/-') {
      setInput((prevInput) => {
        if (prevInput && !isNaN(prevInput)) {
          return (parseFloat(prevInput) * -1).toString();
        }
        return prevInput;
      });
    } else if (value === '%') {
      setInput((prevInput) => {
        if (prevInput && !isNaN(prevInput)) {
          return (parseFloat(prevInput) / 100).toString();
        }
        return prevInput;
      });
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input}
      </div>
      <div className="buttons">
        <button className="operator" onClick={() => handleClick('C')}>C</button>
        <button className="operator" onClick={() => handleClick('+/-')}>+/-</button>
        <button className="operator" onClick={() => handleClick('%')}>%</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('*')}>x</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="operator" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;
