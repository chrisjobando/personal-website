// Initial Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// Styling
import './SASS/index.sass';

// Components
import Navigation from './Components/Navigation';

// Router Components
import Home from './Components/Home';

// Misc.
import * as serviceWorker from './serviceWorker';

// Main HTML
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation logoTitle="Christopher Obando" />
            <Route path='/' exact component={ Home }/>
            <Route path='/about' exact render={ ()=> <h1>About Page</h1> }/>
            <Route path='/resume' exact render={ ()=> <h1>Resume Page</h1> }/>
            <Route path='/portfolio' exact render={ ()=> <h1>Portfolio Page</h1> }/>
          </div>
        </Router>
      </div>
    );
  }
}

// Renders app
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
