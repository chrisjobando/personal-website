import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';

// Pictures
import Assignment1 from '../img/ComputerGraphics/Assignment1.png';
import Assignment11 from '../img/ComputerGraphics/Assignment1_Obando.png';
import Assignment2 from '../img/ComputerGraphics/Assignment2.png';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class ComputerGraphics extends Component {
  render() {
    return (
      <div className="gba" style={ myStyles }>
        <div className="rect">
            <title>computer graphics</title>
            <h1>This is My <span>Computer Graphics</span> Work.</h1>

            <h2>Assignment 1: Pov Ray Scene Recreation</h2>
            <img style={{width: '60%'}} src={Assignment1} alt=' '/><br/>
            <img style={{width: '60%'}} src={Assignment11} alt=' '/><br/>
            <br/>
            <h2>Assignment 2: Terragen Scene</h2>
            <img style={{width: '80%'}} src={Assignment2} alt=' '/>
        </div>
      </div>
    );
  }
}

export default ComputerGraphics;
