import React, { Component } from 'react';
import SeedColors from './SeedColors';
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={SeedColors[4]}/>
      </div>
    )
  }
}

export default App;

