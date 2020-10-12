import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.palette.colors.map(color => (
            <ColorBoxes background={color.color} name={color.name} />
        ));
        return (
            <div className="Palette">
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
