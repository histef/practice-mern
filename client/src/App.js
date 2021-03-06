import React, { Component } from 'react';
import AppNavbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ItemModal />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
