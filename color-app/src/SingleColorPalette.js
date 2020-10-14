import React, { Component } from 'react'
import ColorBoxes from './ColorBoxes';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';


const styles = {
    ColorBoxes: {
        width: "19.7%",
        height: "50%",
        margin: "0 0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        backgroundColor: "black"
    }
}


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
        const { classes } = this.props;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shade.map(color => (
            <ColorBoxes key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>
        ));
        return (
            <div className="SingleColorPalette Palette">
                <Navbar handleChange={this.changeFormat} showingFullPalette={false}/>
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className={classes.ColorBoxes}>
                        <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
