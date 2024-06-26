import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import React from 'react';
import TodoApp from './TodoApp';

function App() {
  const [count, setCount] = useState(0)

  function App() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>veer monika</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// src/App.jsx
import React from 'react';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;





