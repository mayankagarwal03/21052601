import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
const Calculator = () => {
  const [numbers, setNumbers] = useState([]);
  const windowSize = 10; 
  const handleNumberClick = (number) => {
    const updatedNumbers = [...numbers, number].slice(-windowSize);
    setNumbers(updatedNumbers);
  };
  const calculateAverage = () => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length || 0;
  };
  return (
    <div className="calculator">
      <Display numbers={numbers} average={calculateAverage()} />
      {<Button onClick={() => handleNumberClick(1)}>1</Button>}
      {<Button onClick={() => handleNumberClick(2)}>2</Button>}
      {<Button onClick={() => handleNumberClick(3)}>3</Button>}
      {<Button onClick={() => handleNumberClick(4)}>4</Button>}
      {<Button onClick={() => handleNumberClick(5)}>5</Button>}
      {<Button onClick={() => handleNumberClick(6)}>6</Button>}
      {<Button onClick={() => handleNumberClick(7)}>7</Button>}
      {<Button onClick={() => handleNumberClick(8)}>8</Button>}
      {<Button onClick={() => handleNumberClick(9)}>9</Button>}
    </div>
  );
};

export default Calculator;