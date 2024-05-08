import React from 'react';

const Display = ({ numbers, average }) => {
  return (
    <div className="display">
      <p>Window Prev State: {numbers.slice(0, -1).join(', ')}</p>
      <p>Window Curr State: {numbers.join(', ')}</p>
      <p>Average: {average.toFixed(2)}</p>
    </div>
  );
};

export default Display;