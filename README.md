# ccp_react_d02_q13

## React Counter App

This is a simple React application that demonstrates using `useState` to manage state and handle basic user interactions.

### Features

- **Count tracking:** Displays a count starting from 0.
- **Increment button:** Increases the count by 1.
- **Decrement button:** Decreases the count by 1, but prevents going below 0.
- **Reset button:** Resets the count to 0.
- **Goal message:** Shows "Goal Reached!" when the count reaches 10.

### Code Example

```jsx
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

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
