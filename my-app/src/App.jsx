import React, { useState } from 'react';

function App() {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Increment handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement handler, prevent going below 0
  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Reset handler
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>

      {count === 10 && <p style={{ color: 'green' }}>Goal Reached!</p>}

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ margin: '0 10px' }}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;