import React from 'react';
import './App.css';

import ClickCounterHOC from './HOC/ClickCounter'
import HoverCounterHOC from './HOC/HoverCounter'

import ClickCounter from './RenderProps/ClickCounter'
import HoverCounter from './RenderProps/HoverCounter'
import CounterRenderProps from './RenderProps/Counter'

function App() {
  return (
    <div className="App">
      <h1>HOC Example</h1>
      <ClickCounterHOC name='Dennis' incrementStep={5} />
      <HoverCounterHOC name='Sorak' incrementStep={2} />

      <hr />

      <h1>Render Props Example</h1>
      <CounterRenderProps
        incrementStep={5}
        render={(count, incrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            name='Dennis'
          />
        )}
      />

      <CounterRenderProps
        incrementStep={2}
        render={(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            name='Sorak'
          />
        )}
      />
    </div>
  );
}

export default App;
