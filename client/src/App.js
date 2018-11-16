import React, { Component } from 'react';
import AppNavbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h1>yo</h1>
      </div>
    );
  }
}

export default App;
