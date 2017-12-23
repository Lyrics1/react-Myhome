import React, { Component } from 'react';
import {createStore} from 'redux';
import reducer from './reducers/reducer.js'
import Header from './Components/Header.js'
import CardView from './Components/CardView.js';
import Info from './Components/Info';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        	<Header />
        {/*<CardView />*/}
      </div>
    );
  }
}

export default App;
