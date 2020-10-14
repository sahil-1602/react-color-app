import React, { Component } from 'react'
import ColorBoxes from './ColorBoxes';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shade = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        return shades.slice(1);
    }

    changeFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const { format } = this.state; 
        const colorBoxes = this._shade.map(color => (
            <ColorBoxes key={color.id} name={color.name} background={color[format]} showLink={false}/>
        ));
        return (
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
            </div>
        )
    }
}

export default SingleColorPalette;
