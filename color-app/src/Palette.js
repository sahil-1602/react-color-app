import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import Navbar from './Navbar';
import './Palette.css';



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
        console.log(this.props.palette);
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBoxes background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl = {`/palette/${id}/${color.id}`}
            />
        ));
        return (
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} level={level} changeLevel={this.changeLevel}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette;
