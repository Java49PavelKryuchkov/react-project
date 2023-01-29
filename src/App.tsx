import React from 'react';
import { Life } from './components/Life';
import lifeConfig from './config/life-game.json'

function App() {
    return <div>
      <Life dimensions={lifeConfig.dimensions} tickInterval={lifeConfig.tickInterval}></Life>
  </div>
}

export default App;