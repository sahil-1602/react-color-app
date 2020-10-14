import React, { Component } from 'react'
import ColorBoxes from './ColorBoxes';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';


const styles = {
    goBack: {
        width: "19.7%",
        height: "50%",
        margin: "0 0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        backgroundColor: "black",
        "& a":{
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            color:"white",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
            opacity:"1"
        }
    },
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "88%"
    },
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
            <div className={`SingleColorPalette ${classes.palette}`}>
                <Navbar handleChange={this.changeFormat} showingFullPalette={false}/>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} >GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
