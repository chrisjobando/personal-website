// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/skills-bg.jpg';

// Styling
import '../SASS/skills.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '80vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
};

// Main HTML
class Skills extends Component {
  render() {
    return (
      <header style={ myStyles }>
        <h1>{ this.props.title }</h1>
        <div className="row">
          <div className="subrow">
            <span>
              <i class="fab fa-ubuntu" />
            </span>
            <h4>PLATFORMS</h4>
            <ul>
              <li>Linux Ubuntu</li>
              <li>Microsoft Windows</li>
              <li>macOS</li>
            </ul>
          </div>
          <div className="subrow">
            <span>
              <i class="fab fa-java" />
            </span>
            <h4>PROGRAMMING</h4>
              <ul>
                <li>Java</li>
                <li>JavaFX</li>
                <li>C</li>
                <li>C++</li>
                <li>Command Line</li>
                <li>Git</li>
                <li>Python</li>
                <li>MATLAB</li>
              </ul>
          </div>
          <div className="subrow">
            <span>
              <i class="fab fa-html5" />
            </span>
            <h4>WEB DESIGN</h4>
            <ul>
              <li>React.js</li>
              <li>Javascript</li>
              <li>SASS</li>
              <li>Pug</li>
              <li>Gulp</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Jekyll</li>
              <li>Atom</li>
              <li>Sublime Text 3</li>
            </ul>
          </div>
          <div className="subrow">
            <span>
              <i class="fab fa-adobe" />
            </span>
            <h4>GRAPHIC DESIGN</h4>
              <ul>
                <li>Inkscape</li>
                <li>GIMP</li>
                <li>Adobe Photoshop</li>
                <li>Autodesk Maya</li>
              </ul>
          </div>
          <div className="subrow">
            <span>
              <i class="fab fa-writing" />
            </span>
            <h4>LANGUAGES</h4>
            <ul>
              <li>Native Spanish</li>
            </ul>
          </div>
        </div>

        <a href="#button">{ this.props.button }</a>
      </header>
    );
  }
};

export default Skills;
