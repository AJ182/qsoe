import React, { Component } from 'react';
import './App.css';
import GigTable from './Gigs/GigTable';
import AlbumArt from './AlbumArt';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="app__headerLogo" />
          <h1 className="App-title">Quaintest Show on Earth</h1>
        </header>
        {/* <GigTable /> */}
        <AlbumArt />
        <Footer />
      </div>
    );
  }
}

export default App;
