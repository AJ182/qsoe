import React from 'react';
import './albumArt.css';

class AlbumArt extends React.Component {

    render() {

        return (
            <div>
                <div className="albumArt__title">
                    Discography
                </div>
                <div className="albumArt">
                    <div className="albumArt__wrapper">
                        <div className="albumArt__lucidDreamer">
                            <a href="https://qsoe.bandcamp.com/album/lucid-dreamer" target="_blank" className="albumArt__link">
                            </a>
                        </div>
                    </div>
                    <div className="albumArt__wrapper">
                        <div className="albumArt__delusions">
                            <a href="https://qsoe.bandcamp.com/album/delusions-of-grandeur" target="_blank" className="albumArt__link">
                            </a>
                        </div>
                    </div>
                    <div className="albumArt__wrapper">
                        <div className="albumArt__parade">
                            <a href="https://qsoe.bandcamp.com/album/day-to-day-parade" target="_blank" className="albumArt__link">
                            </a>
                        </div>
                    </div>
                    <div className="albumArt__wrapper">
                        <div className="albumArt__journey">
                            <a href="https://qsoe.bandcamp.com/album/the-journey-never-ends" target="_blank" className="albumArt__link">
                            </a>
                        </div>
                    </div>
                    <div className="albumArt__wrapper">
                        <div className="albumArt__waxLyrical">
                            <a href="https://qsoe.bandcamp.com/album/wax-lyrical" target="_blank" className="albumArt__link">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumArt;
