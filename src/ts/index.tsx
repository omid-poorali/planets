import { useState, React, render } from "../lib/react";

// ---- Application --- //
const App = () => {
  const [name, setName] = useState('Omid');
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hello {name}!</h2>
      <p>I am a pargraph</p>
      <input
        type="text"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <h2> Counter value: {count}</h2>
      <button onclick={() => setCount(count + 1)}>+1</button>
      <button onclick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

render(App, document.getElementById('root'));
