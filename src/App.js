import React from 'react';
import './App.css';
import ClickCounter from './HOC/ClickCounter'
import HoverCounter from './HOC/HoverCounter'

function App() {
  return (
    <div className="App">
      <ClickCounter name='Dennis' incrementStep={5} />
      <HoverCounter name='Sorak' incrementStep={2} />
    </div>
  );
}

export default App;
