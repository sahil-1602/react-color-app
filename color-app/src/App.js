import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import Page from './Page';
import NewPaletteForm from './NewPaletteForm';
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelpers';
import './styles/Page.css';

class App extends Component {

  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || SeedColors  };
    this.savePalette = this.savePalette.bind(this);
    this.findPallete = this.findPallete.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPallete(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
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
      return (<Page><Palette {...props} palette={palette} /></Page>);
    }

    const getSinglePalette = props => {
      let palette = generatePalette(this.findPallete(props.match.params.paletteId));
      return (<Page>
                <SingleColorPalette
                  {...props}
                  colorId={props.match.params.colorId}
                  palette={palette}
                />
              </Page>
            );
    }

    return (
      <div>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition classNames='page' timeout={500} key={location.key}>
              <Switch location={location}>
                <Route exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm {...routeProps}
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                      />
                    </Page>
                  )}
                />
                <Route exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        deletePalette={this.deletePalette}
                        {...routeProps}
                        palettes={this.state.palettes}
                      />
                    </Page>
                    )}
                />
                <Route exact
                  path="/palette/:id" render={getPalette}
                />
                <Route exact
                  path="/palette/:paletteId/:colorId"
                  render={getSinglePalette}
                />
                </Switch>
              </CSSTransition>
          </TransitionGroup>
        )}/>
      </div>
    )
  }
}

export default App;

