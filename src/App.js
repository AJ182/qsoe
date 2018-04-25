import React, { Component } from 'react';
import './App.css';
import GigTable from './Gigs/GigTable';
import AlbumArt from './AlbumArt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="app__headerLogo" />
          <h1 className="App-title">Quaintest Show on Earth</h1>
        </header>
        <GigTable />
        <AlbumArt /> 
      </div>
    );
  }
}

export default App;
