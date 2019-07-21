import React from 'react';
import './App.css';

import ClickCounterHOC from './HOC/ClickCounter'
import HoverCounterHOC from './HOC/HoverCounter'

import ClickCounterRenderProps from './RenderProps/ClickCounter'
import HoverCounterRenderProps from './RenderProps/HoverCounter'
import Counter from './RenderProps/Counter'

function App() {
  return (
    <div className="App">
      <h1>HOC Example</h1>
      <ClickCounterHOC name='Dennis' incrementStep={5} />
      <HoverCounterHOC name='Sorak' incrementStep={2} />

      <hr />

      <h1>Render Props Example</h1>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterRenderProps
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounterRenderProps
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />
    </div>
  );
}

export default App;
