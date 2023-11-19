import React from 'react';
import './App.css';
import './webComponents/my-component/my-component';
import './webComponents/table-component/table-component';
import './webComponents/counter-component/counter-component';
import './webComponents/pure-counter-component/pure-counter-component';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      
      <counter-component></counter-component>
      <pure-counter-component count={count}/>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
      <my-component></my-component>
      <table-component></table-component>

    </div>
  );
}

export default App;
