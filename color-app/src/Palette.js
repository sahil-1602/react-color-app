import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level: level });
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBoxes background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={this.changeLevel}/>
                {/* Navbar Goes here */}
                <div className="Palette-colors">
                    {/* bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* Footer eventually */}
            </div>
        )
    }
}

export default Palette;
