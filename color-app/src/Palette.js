import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';


const styles = {
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "88%"
    }
};

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format:"hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level: level });
    }

    changeFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBoxes background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette ={true}
            />
        ));
        return (
            <div className={classes.palette}>
                <Navbar handleChange={this.changeFormat} level={level} changeLevel={this.changeLevel} showingFullPalette={true}/>
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);
