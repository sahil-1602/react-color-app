import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

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
          <Route exact path="/" render={(routeProps) => <PaletteList  {...routeProps} palettes={SeedColors}/>}/>
          <Route exact path="/palette/:id" render={getPalette} />
          <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette/>}/>
        </Switch>
        {/* <Palette palette={generatePalette(SeedColors[0])}/> */}
      </div>
    )
  }
}

export default App;

