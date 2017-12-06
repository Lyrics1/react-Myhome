import React, { Component } from 'react';
import Header from './Components/Header.js'
import CardView from './Components/CardView.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        	<Header />
        	<CardView />
      </div>
    );
  }
}

export default App;
