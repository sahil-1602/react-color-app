import React, { Component } from 'react';
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(SeedColors[4]));
    return (
      <div>
        <Palette palette={SeedColors[4]}/>
      </div>
    )
  }
}

export default App;

