import React, { Component } from 'react';
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(SeedColors[0])}/>
      </div>
    )
  }
}

export default App;

