import React, { Component } from 'react'
import './ColorBoxes.css';

class ColorBoxes extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.background}} className="ColorBoxes">
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default ColorBoxes;
