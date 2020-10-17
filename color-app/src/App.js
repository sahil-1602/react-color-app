import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SeedColors from './SeedColors';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {

  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || SeedColors  };
    this.savePalette = this.savePalette.bind(this);
    this.findPallete = this.findPallete.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
  }

  findPallete(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    const getPalette = props => {
      let palette = generatePalette(this.findPallete(props.match.params.id));
      return <Palette {...props} palette={palette} />;
    }

    const getSinglePalette = props => {
      let palette = generatePalette(this.findPallete(props.match.params.paletteId));
      return <SingleColorPalette {...props} colorId={props.match.params.colorId} palette={palette} />;
    }

    return (
      <div>
        <Switch>
          <Route exact
            path="/palette/new"
            render={(routeProps) => <NewPaletteForm {...routeProps}
              savePalette={this.savePalette}
              palettes={this.state.palettes}
            />}
          />
          <Route exact
            path="/"
            render={(routeProps) => <PaletteList  {...routeProps}
              palettes={this.state.palettes} />}
          />
          <Route exact
            path="/palette/:id" render={getPalette}
          />
          <Route exact
            path="/palette/:paletteId/:colorId"
            render={getSinglePalette}
          />
        </Switch>
      </div>
    )
  }
}

export default App;

