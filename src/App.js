import React from 'react';
import './App.css';
import Post from "./components/Posts";
import Counter from "./components/Counter";

function App() {

  return (
    <div className='container'>
      <h2>Counter</h2>
      <div>
        <Counter />
      </div>
      <hr />
      <h2>Posts</h2>
      <div>
        <Post />
      </div>
    </div>
  );
}

export default App;
