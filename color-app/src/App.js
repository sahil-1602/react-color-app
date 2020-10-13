import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';

class App extends Component {
  findPallete(id) {
    return SeedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    const getPalette = props => {
      let palette = generatePalette(this.findPallete(props.match.params.id));
      return <Palette {...props} palette={palette} />;
    }
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <PaletteList palettes={SeedColors}/>}/>
          <Route exact path="/palette/:id" render={getPalette} />
        </Switch>
        {/* <Palette palette={generatePalette(SeedColors[0])}/> */}
      </div>
    )
  }
}

export default App;

