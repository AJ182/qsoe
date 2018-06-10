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

        <p className="app__about">
            An alternative folk band from Wigan<br/>
            The band was formed in 2013 and has featured a variety of musicians and song writers, they played locally perfecting their show then started to expand by taking it to larger and further afield audiences.
        </p>
        <p className="app__about">
            QSOE have played main stage along side artists from all over the world at festivals such as the Ukulele Festival of Scotland and the Grand Northern Ukulele Festival.
        </p>
            <p className="app__about">
            The Wigan band has released three full studio albums of original music and one live album, now available on most online stores.
            Listen on Spotify , iTunes , Bandcamp
        </p>
        <p className="app__about">
            Their music has been featured on highly successful advertising campaigns reaching 100s of thousands. They have had extensive radio play, contributed to film soundtracks and were recently asked to submit their music to the British Library. They have performed many live sessions that have been watched online all over the world such as ' The Narrow-boat Sessions' and 'Sofar Sounds'
        </p>
        <p className="app__about">
            QSOE have helped to revitalise the local music scene with regular performances around Wigan and by helping to organise fantastic live music events. Also putting a bimonthly event showcasing local talent and bringing in new performers from out of town to join in the music scene.
        </p>

        {/* <GigTable /> */}
        <AlbumArt />
        <Footer />
      </div>
    );
  }
}

export default App;
