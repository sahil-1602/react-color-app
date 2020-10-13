import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/palette/:id" />
        </Switch>
        {/* <Palette palette={generatePalette(SeedColors[0])}/> */}
      </div>
    )
  }
}

export default App;

