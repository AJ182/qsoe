import React, { Component } from 'react';
import './App.css';
import GigTable from './Gigs/GigTable';
import AlbumArt from './AlbumArt';
import Footer from './Footer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            showSpotify: false
        };
    }

    openSpotify = () => {
        this.setState({ showSpotify: true });
    };

    closeSpotify = () => {
        this.setState({ showSpotify: false });
    };

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

            <div className="app_spotifyCollapsed" onClick={this.openSpotify} >
                Open Spotify Player
            </div>


            <div className={this.state.showSpotify ? "app__spotifyPlayer" : "app__spotifyPlayer--hidden"}>
                {this.state.showSpotify && (
                    <div>
                        <iframe src="https://open.spotify.com/embed/artist/1ZCYsLDNK5G2MLQVj5mzEh" width="400" height="420" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <div onClick={this.closeSpotify} className="app__hideSpotify">
                            hide
                        </div>
                    </div>
                )}
            </div>

          </div>
        );
    }
}

export default App;
