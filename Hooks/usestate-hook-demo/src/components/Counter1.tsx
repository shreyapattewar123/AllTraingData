import React, { useState } from 'react';
const useCounter = (initialValue: number) => {
const [count, setCount] = useState(initialValue);
const increment = () => setCount(count + 1);
return { count, increment };
};
const Counter1: React.FC = () => {
const { count, increment } = useCounter(0);
return (
<div>
  <p>Count:{count}</p>
  <button onClick={increment}>Increament</button>
</div>
);
};
export default Counter1;